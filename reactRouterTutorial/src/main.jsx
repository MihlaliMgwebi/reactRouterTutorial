import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact from "./routes/edit";
import Root, {
  action as rootAction,
  loader as rootLoader,
} from "./routes/root";

// [createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router)
const router = createBrowserRouter([
  {
    // root route: root layout of the UI
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        // contact route : nested route
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
