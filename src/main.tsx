import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectDate from "./components/SelectDate.tsx";
import SelectSlots from "./components/SelectSlots.tsx";
import CustomerInfo from "./components/CustomerInfo.tsx";
import BookingConfirmation from "./components/BookingConfirmation.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SelectDate />,
      },
      {
        path: "/slots",
        element: <SelectSlots />,
      },
      {
        path: "/info",
        element: <CustomerInfo />,
      },
      {
        path: "/confirm",
        element: (
          <BookingConfirmation date={""} slots={[]} name={""} phone={""} />
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
