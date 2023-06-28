import { createBrowserRouter } from "react-router-dom";
import WaiterAction from "./views/pages/Action";
import Home from "./views/pages/Home";
import FinishOrder from "./views/pages/Order/FinishOrder";
import TakeOrder from "./views/pages/Order/TakeOrder";
import Table from "./views/pages/Table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/action",
    element: <WaiterAction />,
  },
  {
    path: "/action/tables",
    element: <Table />,
  },
  {
    path: "/action/tables/:tableId/take-order",
    element: <TakeOrder />,
  },
  {
    path: "/action/tables/:tableId/finish-order",
    element: <FinishOrder />,
  },
]);
export default router;
