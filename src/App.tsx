import { routerConfig } from "@lib/configs/RouterConfig";
import { RouterProvider } from "react-router-dom";
import "normalize.css";
import { GlobalStyles } from "@lib/theme/globalStyles";
import { Modal } from "@components/Modal/Modal";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "./store";
import { LoaderLayout } from "@layouts/loaderLayout/LoaderLayout";

function App() {
  return (
    <Provider store={store}>
      <LoaderLayout>
        <SnackbarProvider />
        <GlobalStyles />
        <Modal />
        <RouterProvider router={routerConfig}></RouterProvider>
      </LoaderLayout>
    </Provider>
  );
}

export default App;
