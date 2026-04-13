import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Root from "./layout/Root";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import AllFriendsPage from "./pages/AllFriendsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "allFriends",
        element: <AllFriendsPage />,
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
