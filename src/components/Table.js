import React from 'react';

const DataTable = React.memo(({ data, onRowClick, onSort, sortColumn, sortOrder }) => {
  const handleSort = (column) => {
    if (onSort) {
      onSort(column);
    }
  };

  if (data.length === 0) {
    return <p>No items to display</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('id')} className={sortColumn === 'id' ? 'sorted' : ''}>
            ID {sortColumn === 'id' && sortOrder === 'asc' && '▲'}
            {sortColumn === 'id' && sortOrder === 'desc' && '▼'}
          </th>
          <th onClick={() => handleSort('title')} className={sortColumn === 'title' ? 'sorted' : ''}>
            Title {sortColumn === 'title' && sortOrder === 'asc' && '▲'}
            {sortColumn === 'title' && sortOrder === 'desc' && '▼'}
          </th>
          <th onClick={() => handleSort('completed')} className={sortColumn === 'completed' ? 'sorted' : ''}>
            Completed {sortColumn === 'completed' && sortOrder === 'asc' && '▲'}
            {sortColumn === 'completed' && sortOrder === 'desc' && '▼'}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => onRowClick(item)} className="hoverable">
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default DataTable;
