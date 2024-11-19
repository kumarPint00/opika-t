import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./errorpage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const Form = lazy(() => import('./components/Form'));
const DataList = lazy(() => import('./components/Table'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/data",
    element: <DataList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/form",
    element: <Form />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
