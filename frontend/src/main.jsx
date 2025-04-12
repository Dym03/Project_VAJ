import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import BoulderGyms from "./components/BoulderGyms"
import {loader as boulderGymLoader} from './routes/BoulderGyms.route'
import ActiveBoulders from "./components/ActiveBoulders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/boulderGyms",
        element: <BoulderGyms />,
        loader: boulderGymLoader,
      },
      {
        path: "/active_boulders",
        element: <ActiveBoulders />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
