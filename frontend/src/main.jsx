import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AddACharacterPage from "./pages/AddACharacterPage";
import AllCharactersPage from "./pages/AllCharactersPage";
import SignUp from "./pages/SignUp";
import ModifyCharacter from "./pages/ModifyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/add",
    element: <AddACharacterPage />,
  },
  {
    path: "/characters",
    element: <AllCharactersPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/modify/:id",
    element: <ModifyCharacter />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
