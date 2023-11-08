import {createBrowserRouter} from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Root from "../Layout/Root";
import Service from "../Service/Service";
import PrivateRoute from "./PrivateRoute";
import AllService from "../AllService/AllService";
import SingleService from "../SingleService/SingleService";
import AddProduct from "../AddProduct/AddProduct";
import ErrorPage from "../ErrorPage/ErrorPage";
import ManageService from "../ManageService/ManageService";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
// import MySchedule from "../MySchedule/MySchedule";
import BookService from "../Booking/BookService";
// import Bookings from "../Booking/Bookings";
import BookingRow from "../Booking/BookingRow";
// import UpdateProduct from "../UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
        loader: () => fetch("https://b8-a11-server-side.vercel.app/brands"),
      },
      {
        path: "/manageservice",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
        loader: () => fetch("https://b8-a11-server-side.vercel.app/brands"),
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
      {
        path: "/services",
        
        element: ( 
        <PrivateRoute>
        <AllService></AllService>
        </PrivateRoute>
        ),
        loader: () => fetch("/AllService.json"),
      },
      {
        path: "/services/:service_id",
        element: (
          <PrivateRoute>
        <SingleService></SingleService>
        </PrivateRoute>
        ),
        loader: () => fetch("/AllService.json"),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({params}) =>
          fetch(`https://b8-a11-server-side.vercel.app/brands/${params.id}`),
      },
      {
        path: "/deleteproduct/:id",
        element: (
          <PrivateRoute>
            <DeleteProduct></DeleteProduct>
          </PrivateRoute>
        ),
        loader: ({params}) =>
          fetch(`https://b8-a11-server-side.vercel.app/brands/${params.id}`),
      },
      {
        path: '/book',
        element: <PrivateRoute>
          <BookService></BookService>
        </PrivateRoute>,
        // loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`)
      },
      {
        path: '/booking',
        element: <PrivateRoute>
          <BookingRow></BookingRow>
        </PrivateRoute>
      }
      // {
      //   path: "/schedule",
      //   element: <MySchedule></MySchedule>
      // }
    ],
  },
]);

export default router;
