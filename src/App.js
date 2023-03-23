import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authoriztion from "./Components/Authorization/Authorization";
import Table from "./Components/Table/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Authoriztion />,
  },
  {
    path: "/",
    element: <Table />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
