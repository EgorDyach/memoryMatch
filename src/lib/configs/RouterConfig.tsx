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
import { VersusGamePage } from "@modules/versusGamePage/VersusGamePage";
import PageNotFound from "@modules/pageNotFound/PageNotFound";

export const routerConfig = createBrowserRouter([
  {
    path: "/game",
    element: <GameLayout />,
    children: [
      {
        path: "/game",
        element: <GamePage />,
      },
      {
        path: "/game/versus",
        element: <VersusGamePage />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <MainLayout>
        <PaddingLayout>
          <PageNotFound />
        </PaddingLayout>
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
          <FixedLayout showHealth>
            <ShopPage />
          </FixedLayout>
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
