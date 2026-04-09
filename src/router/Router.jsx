import { createBrowserRouter } from "react-router";
import Homepage from "../Pages/homepage/Homepage";
import Rootlayout from "../Layout/Rootlayout";
import Apps from "../Pages/apps/Apps";
import Installapp from "../Pages/installapp/Installapp";
import Errorpage from "../Pages/Errorpage/Errorpage";
import AppDetails from "../Pages/appdetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Rootlayout />,
    children: [
      {
        // path: "/homepage",
        index: true,
        element: <Homepage />,
        loader: () => fetch("/data.json")
      },
      {
        path: "/allapp",
        element: <Apps />
      },
      {
        path: "/apps/:id",
        element: <AppDetails/>
      },
      {
        path: "/installapp",
        element: <Installapp />
      }
    ],
    errorElement: <Errorpage /> 
  },


]);
