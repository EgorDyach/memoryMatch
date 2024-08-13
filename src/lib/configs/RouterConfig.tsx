import { MainLayout } from "@layouts/mainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <MainLayout>не нашел</MainLayout>,
    children: [
      {
        path: "/",
        element: "main",
      },
      {
        path: "/map",
        element: "map",
      },
      {
        path: "/shop",
        element: "shop",
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
