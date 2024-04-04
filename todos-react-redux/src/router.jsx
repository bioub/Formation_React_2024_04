import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import About from "./pages/About";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", // "/"  + ""
        element: <Home />,
      },
      {
        path: "todos",
        element: <Todos />,
      },
      {
        path: "about/:name",
        element: <About />,
      },
    ]
  },
]);
