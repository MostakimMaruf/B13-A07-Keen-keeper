import { createBrowserRouter } from "react-router";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Timeline from "../pages/timeline/timeline";
import Stats from "../pages/stats/stats";
import Frienddetails from "../component/homepage/frienddetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },

      {
        path: "/timeline",
        element: <Timeline />,
      },

      {
        path: "/stats",
        element: <Stats />,
      },

       {
        path: "/stats",
        element: <Stats />,
      },


      {
        path: "/frienddetails/:Id",
        Component: Frienddetails,
        loader: () => fetch("/friends.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);