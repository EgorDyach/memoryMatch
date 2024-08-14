import { routerConfig } from "@lib/configs/RouterConfig";
import { RouterProvider } from "react-router-dom";
import "normalize.css";
import { GlobalStyles } from "@lib/theme/globalStyles";
import { Modal } from "@components/Modal/Modal";
function App() {
  return (
    <>
      <GlobalStyles />
      <Modal />
      <RouterProvider router={routerConfig}></RouterProvider>
    </>
  );
}

export default App;
