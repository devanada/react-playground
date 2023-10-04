import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages";
import AuthLogin from "@/pages/auth/login";
import AuthRegister from "@/pages/auth/register";
import ProductsPage from "@/pages/products";
import ProductsDetail from "@/pages/products/detail";
import { useEffect } from "react";
import { setAxiosConfig } from "@/utils/apis/axiosWithConfig";

export default function Router() {
  useEffect(() => {
    setAxiosConfig("", "https://651516e3dc3282a6a3cdd60a.mockapi.io/api/v1");
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },
    {
      path: "/products/:id",
      element: <ProductsDetail />,
    },
    {
      path: "/login",
      element: <AuthLogin />,
    },
    {
      path: "/register",
      element: <AuthRegister />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
