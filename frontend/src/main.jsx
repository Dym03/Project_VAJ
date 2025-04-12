import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import BoulderGyms from "./components/BoulderGyms"
import {loader as boulderGymLoader} from './routes/BoulderGyms.route'
import ActiveBoulders from "./components/ActiveBoulders";
import BoulderGymDetail from "./components/BoulderGymDetail";
import { loader as gymDetailLoader } from "./routes/BoulderGymDetail.route";

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
      },
      {
        path: "/boulderGyms/:id",
        element: <BoulderGymDetail />,
        loader: gymDetailLoader,
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
