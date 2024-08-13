import { routerConfig } from "@lib/configs/RouterConfig";
import { RouterProvider } from "react-router-dom";
import "normalize.css";
function App() {
  return <RouterProvider router={routerConfig}></RouterProvider>;
}

export default App;
