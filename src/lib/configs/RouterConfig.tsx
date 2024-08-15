import { MainLayout } from "@layouts/mainLayout/MainLayout";
import { PaddingLayout } from "@layouts/mainLayout/PaddingLayout";
import { RootPage } from "@modules/rootPage/RootPage";
import { ShopPage } from "@modules/shopPage/ShopPage";
import { TasksPage } from "@modules/tasksPage/TasksPage";
import { VersusPage } from "@modules/versusPage/VersusPage";
import { createBrowserRouter } from "react-router-dom";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <MainLayout>
        <PaddingLayout>Страница не найдена</PaddingLayout>
      </MainLayout>
    ),
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
        element: (
          <PaddingLayout showHealth>
            <ShopPage />
          </PaddingLayout>
        ),
      },
      {
        path: "/tasks",
        element: (
          <PaddingLayout padding="0 19px">
            <TasksPage />
          </PaddingLayout>
        ),
      },
      {
        path: "/versus",
        element: (
          <PaddingLayout>
            <VersusPage />
          </PaddingLayout>
        ),
      },
    ],
  },
]);
