import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import { router } from './router/Router';
import Installedappcontext from './Context/Installedappcontext';
import { InstalledAppContext } from './Context/Installedcontext';






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstalledAppContext>

      <RouterProvider router={router} />

    </InstalledAppContext>

  </StrictMode>,
)

