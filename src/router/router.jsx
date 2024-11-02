import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import PageNotFound from "../components/Body/BodyComponents/PageNotFound";
import Home from "../components/Body/BodyComponents/Home";
import ListedBooks from "../components/Body/BodyComponents/ListedBooks";
import PagesToRead from "../components/Body/BodyComponents/PagesToRead";
import BookDetails from "../components/Body/BodyComponents/BookDetails";

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
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
    ],
  },
]);
