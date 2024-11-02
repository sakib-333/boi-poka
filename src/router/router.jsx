import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import PageNotFound from "../components/Body/BodyComponents/PageNotFound";
import Home from "../components/Body/BodyComponents/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
