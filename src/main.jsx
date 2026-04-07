import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import Rootlayout from './Layout/Rootlayout';
import Apps from './Pages/apps/Apps';
import Installapp from './Pages/installapp/Installapp';
import Homepage from './Pages/homepage/homepage';
import Errorpage from './Pages/Errorpage/Errorpage';






const router = createBrowserRouter([
  {
    path: "/",

    element: <Rootlayout />,
    children: [
      {
        // path: "/homepage",
        index: true,
        element: <Homepage />,
        loader: () => fetch("data.json")
      },
      {
        path: "/allapp",
        element: <Apps />
      },
      {
        path: "/installapp",
        element: <Installapp />
      }
    ],
    errorElement: <Errorpage /> 
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
