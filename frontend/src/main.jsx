import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AddACharacterPage from "./pages/AddACharacterPage";
import AllCharactersPage from "./pages/AllCharactersPage";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
