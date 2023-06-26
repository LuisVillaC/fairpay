import { createBrowserRouter } from "react-router-dom";
import WaiterAction from "./views/pages/Action";
import Home from "./views/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/action",
    element: <WaiterAction />,
  },
]);
export default router;
