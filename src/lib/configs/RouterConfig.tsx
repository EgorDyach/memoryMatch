import { MainLayout } from "@layouts/mainLayout/MainLayout";
import { RootPage } from "@modules/rootPage/RootPage";
import { ShopPage } from "@modules/shopPage/ShopPage";
import { createBrowserRouter } from "react-router-dom";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <MainLayout>не нашел</MainLayout>,
    children: [
      {
        path: "/",
        element: <RootPage />,
      },
      {
        path: "/map",
        element: "map",
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/tasks",
        element: "tasks",
      },
      {
        path: "/versus",
        element: "versus",
      },
    ],
  },
]);
