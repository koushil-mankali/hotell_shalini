import { createBrowserRouter } from "react-router-dom";

import Home from "../Components/Home";
import RoomList from "../Components/RoomList";
import SingleRoom from "../Components/SingleRoom";
import BookingDetials from "../Components/BookingDetails";
import Service from "../Components/Service";
import Sauna from "../Components/Sauna";
import SingleService from "../Components/SingleService";
import Summary from "../Components/Summary";
import Login from "../Components/Login";
import SignUp from "../Components/Signup";

// As per login variable value routes will be altered.
let login = false;

// These routes will be considered if yourn't logged in (login === false)
let routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <h1>Error Page Not Found!</h1>,
  },
];

// These routes will be considered if your logged in (login === true)
if (login) {
  routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/Rooms",
      element: <RoomList />,
    },
    {
      path: "/Rooms/:id",
      element: <SingleRoom />,
    },
    {
      path: "/booking/:userID",
      element: <BookingDetials />,
    },
    {
      path: "/Services",
      element: <Service />,
    },
    {
      path: "/Sauna",
      element: <Sauna />,
    },
    {
      path: "/Services/:id",
      element: <SingleService />,
    },
    {
      path: "/Summary/:userID",
      element: <Summary />,
    },
    {
      path: "*",
      element: <h1>Error Page Not Found!</h1>,
    },
  ];
}

let router = createBrowserRouter(routes);

export default router;
