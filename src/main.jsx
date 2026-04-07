import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import Rootlayout from './Layout/Rootlayout';




const router = createBrowserRouter([
  {
    path: "/",
  
    element: <Rootlayout />,
    children: [
      {
        // path: "/homepage",
          index:  true,
        element: <h1>Home page</h1>
      },
      {
        path: "/apps",
        element: <h1>All App Here</h1>
      },
      {
        path: "/emon",
        element: <h1>Emon Cst, 21 Age BD</h1>
      }
    ],
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
