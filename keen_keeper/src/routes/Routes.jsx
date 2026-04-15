import { createBrowserRouter } from "react-router";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Timeline from "../pages/timeline/timeline";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout ,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },

          {
        path: "/timeline",
        element: <Timeline />,
      },
      
     
      // {
      //   path: "/bookDetails/:bookId",
      //   Component: BookDetails,
      //   loader: () => fetch("/booksData.json"),
      // },
    ],
    errorElement: <ErrorPage />,
  },
]);