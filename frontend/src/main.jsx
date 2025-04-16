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
import UpdateBoulderForm from "./components/UpdateBoulderForm";
import { editBoulderLoader } from "./routes/EditBoulderForm.route";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>
      },
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
            path: "addBoulder",
            element: <BoulderForm />,
            loader: bouldersFormLoader,
            action: bouldersFormAction,
          },
          {
            path: "delete/:boulderId",
            element: <DeleteBoulderForm />,
            action: bouldersFormAction,
          },
          {
            path: "edit/:boulderId",
            element: <UpdateBoulderForm />,
            loader: editBoulderLoader,
            action: bouldersFormAction,
          }
        ]
      },      
      {
        path: "/boulderGyms/:id",
        element: <BoulderGymDetail />,
        loader: gymDetailLoader,
        children: [
          {
            path: "addBoulder",
            element: <BoulderForm />,
            loader: bouldersFormLoader,
            action: bouldersFormAction,
          },
          {
            path: "delete/:boulderId",
            element: <DeleteBoulderForm />,
            action: bouldersFormAction,
          },
          {
            path: "edit/:boulderId",
            element: <UpdateBoulderForm />,
            loader: editBoulderLoader,
            action: bouldersFormAction,
          }
        ]
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
