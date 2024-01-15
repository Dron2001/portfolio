import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter({
  basename: '/portfolio',
  routes: [
    {
      path: '/',
      element: <App />,
    },
  ],
})

root.render(
  <React.StrictMode>
    <RouterProvider router={router} basename='/portfolio'>
      <App />
    </RouterProvider>
  </React.StrictMode>
)