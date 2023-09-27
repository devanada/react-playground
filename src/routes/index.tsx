import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages";
import PostsPage from "@/pages/posts";
import PostsDetail from "@/pages/posts/detail";
import ProductsPage from "@/pages/products";
import ProductsDetail from "@/pages/products/detail";

export default function Router() {
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
      path: "/posts",
      element: <PostsPage />,
    },
    {
      path: "/posts/:id_post",
      element: <PostsDetail />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
