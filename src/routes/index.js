import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Components/Home";
import RoomList from "../Components/RoomList";
import SingleRoom from "../Components/SingleRoom";
import BookingDetials from "../Components/BookingDetails";
import Service from "../Components/Service";
import Sauna from "../Components/Sauna";
import SingleService from "../Components/SingleService";
import Summary from "../Components/Summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

export default router;
