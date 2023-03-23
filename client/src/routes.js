import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ListagemIngredientes from "./ingredients/ListagemIngredientes";
import FormIngredientes from "./ingredients/FormIngredientes";
import ListagemProdutos from "./products/ListagemProdutos";
import FormProdutos from "./products/FormProdutos";
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
  {
    path: "/ingredientes/editar/:id",
    element: <FormIngredientes />,
  },
  {
    path: "/produtos",
    element: <ListagemProdutos />,
  },
  {
    path: "/produtos/adicionar",
    element: <FormProdutos />,
  },
  {
    path: "/produtos/editar/:id",
    element: <FormProdutos />,
  }

]);

const Routes = () => {
  return(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default Routes;