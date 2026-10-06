import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { StrictMode } from 'react'
import Router from './routes/route'
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
