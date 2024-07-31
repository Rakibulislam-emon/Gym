import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './Routes/Route.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
// import Main from './Layouts/Main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={route}>
      </RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
