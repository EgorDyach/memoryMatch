import { routerConfig } from "@lib/configs/RouterConfig";
import { RouterProvider } from "react-router-dom";
import "normalize.css";
import { GlobalStyles } from "@lib/theme/globalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routerConfig}></RouterProvider>
    </>
  );
}

export default App;
