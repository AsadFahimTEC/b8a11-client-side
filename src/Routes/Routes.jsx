import {createBrowserRouter} from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Root from "../Layout/Root";
import Service from "../Service/Service";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/service/:service_id",
        element: (
          <PrivateRoute>
            <Service></Service>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
    ],
  },
]);

export default router;