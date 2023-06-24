import { createBrowserRouter } from "react-router-dom";
import About from "./views/pages/About";
import Home from "./views/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
export default router;
