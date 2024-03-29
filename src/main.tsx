import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.tsx";
import Login from "./components/login/Login.tsx";
import Register from "./components/register/Register.tsx";
import Checkout from "./components/checkout/checkout.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";

import "./index.css";
import PostPurchase from "./components/post-purchase/postPurchase.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/post-purchase",
    element: <PostPurchase />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
