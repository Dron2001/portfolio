import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutes, RouterProvider, Route } from 'react-router-dom';

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createRoutes([
  {
    path: '/',
    element: <App />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider routes={routes}>
      <Route />
    </RouterProvider>
  </React.StrictMode>
);
