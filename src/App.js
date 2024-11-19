import React, { useState, useEffect, Suspense, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { fetchData, submitData } from './services/api';
import './styles/App.css';

const Form = React.lazy(() => import('./components/Form'));
const DataTable = React.lazy(() => import('./components/Table.js'));
const DataDialog = React.lazy(() => import('./components/DataDialog'));

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataAndUpdateState();
  }, []);

  const fetchDataAndUpdateState = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fetchData();
      setData(result);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleFormSubmit = useCallback(async (formData) => {
    setIsLoading(true);
    try {
      const result = await submitData(formData);
      setData([result, ...data]);
    } catch (error) {
      setError('Error submitting data');
    } finally {
      setIsLoading(false);
    }
  }, [data]);

  const handleRowClick = useCallback((item) => {
    setSelectedItem(item);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const dataComponents = useMemo(() => (
    <Suspense fallback={<div>Loading...</div>}>
      <Form onSubmit={handleFormSubmit} />
      <DataTable data={data} onRowClick={handleRowClick} />
      <DataDialog item={selectedItem} onClose={handleCloseDialog} />
    </Suspense>
  ), [data, selectedItem, handleFormSubmit, handleRowClick, handleCloseDialog]);

  return (
    <div className="container">
      <h1>Opika task</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!isLoading && !error && dataComponents}
    </div>
  );
}

App.propTypes = {
};

export default App;
