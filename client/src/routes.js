import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ListagemIngredientes from "./ingredients/ListagemIngredientes";
import FormIngredientes from "./ingredients/FormIngredientes";
import Home from "./site/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ingredientes",
    element: <ListagemIngredientes />,
  },
  {
    path: "/ingredientes/adicionar",
    element: <FormIngredientes />,
  },
]);

const Routes = () => {
  return(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default Routes;