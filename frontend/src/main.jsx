import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import BoulderGyms from "./components/BoulderGyms"
import {loader as boulderGymLoader} from './routes/BoulderGyms.route'
import ActiveBoulders from "./components/ActiveBoulders";
import BoulderGymDetail from "./components/BoulderGymDetail";
import BoulderGymForm from "./components/BoulderGymForm";
import { loader as gymDetailLoader } from "./routes/BoulderGymDetail.route";
import {action as boulderGymFormAction, loader as boulderGymFormLoader} from './routes/BoulderGymForm.route'
import {loader as bouldersLoader} from './routes/Boulders.route'
import {loader as bouldersFormLoader, action as bouldersFormAction} from './routes/BoulderForm.route'
import BoulderForm from "./components/BoulderForm";
import DeleteBoulderForm from "./components/DeleteBoulderForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/boulderGyms",
        element: <BoulderGyms />,
        loader: boulderGymLoader,
        children: [
          {
            path: "/boulderGyms/addGym",
            element: <BoulderGymForm />,
            loader: boulderGymFormLoader,
            action: boulderGymFormAction,
          }
        ]
      },
      {
        path: "/active_boulders",
        element: <ActiveBoulders />,
        loader: bouldersLoader,
        children: [
          {
            path: "/active_boulders/addBoulder",
            element: <BoulderForm />,
            loader: bouldersFormLoader,
            action: bouldersFormAction,
          },
          {
            path: "delete/:id",
            element: <DeleteBoulderForm />,
            action: bouldersFormAction,
          }
        ]
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
