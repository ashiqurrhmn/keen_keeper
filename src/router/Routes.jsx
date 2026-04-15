import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Homepage from "../pages/Homepage";
import AllFriendsPage from "../pages/AllFriendsPage";
import ErrorPage from "../pages/ErrorPage";
import FriendDetails from "../pages/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />,
      },
      {
        path: "/timeline",
        element: <div>timeline page</div>,
      },
      {
        path: "/stats",
        element: <div>stats page</div>,
      }
    ],
    errorElement: <ErrorPage />,
  },
]);