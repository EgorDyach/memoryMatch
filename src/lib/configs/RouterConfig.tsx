import { FixedLayout } from "@layouts/mainLayout/FixedLayout";
import { MainLayout } from "@layouts/mainLayout/MainLayout";
import { PaddingLayout } from "@layouts/mainLayout/PaddingLayout";
import { RootPage } from "@modules/rootPage/RootPage";
import { ShopPage } from "@modules/shopPage/ShopPage";
import { TasksPage } from "@modules/tasksPage/TasksPage";
import { VersusPage } from "@modules/versusPage/VersusPage";
import { createBrowserRouter } from "react-router-dom";
import { SeasonsPage } from "@modules/seasonsPage/SeasonsPage";
import { MapPage } from "@modules/mapPage/MapPage";
import { GameLayout } from "@layouts/gameLayout/GameLayout";
import { GamePage } from "@modules/gamePage/GamePage";

export const routerConfig = createBrowserRouter([
  {
    path: "/game",
    element: <GameLayout />,
    children: [
      {
        path: "/game",
        element: <GamePage />,
      },
    ],
  },
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
        element: (
          <PaddingLayout overflow>
            <SeasonsPage />
          </PaddingLayout>
        ),
      },
      {
        path: "/map/:seasonId",
        element: (
          <FixedLayout>
            <MapPage />
          </FixedLayout>
        ),
      },
      {
        path: "/shop",
        element: (
          <PaddingLayout showHealth overflow>
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
