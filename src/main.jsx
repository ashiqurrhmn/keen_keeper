import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./router/Routes";
import FriendTimeLineProvider from "./context/FriendTimeLineProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendTimeLineProvider>
      <RouterProvider router={router} />
    </FriendTimeLineProvider>
  </StrictMode>,
);
