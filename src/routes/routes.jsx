import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Join } from "../pages/auth/Join";

export const router = createBrowserRouter([
  {
    path: "/auth",
    children: [
      { path: "login", element: <Login></Login> },
      { path: "join", element: <Join></Join> },
    ],
  },
]);
