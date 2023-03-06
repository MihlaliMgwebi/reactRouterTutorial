import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Contact from "./routes/contact";
import Root from "./routes/root";

// [createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router)
const router = createBrowserRouter([
  {
    // root route: root layout of the UI
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        // contact route : nested route
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
