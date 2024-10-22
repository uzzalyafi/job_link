import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./components/pages/Home";
import Root from "./components/layouts/Root";
import About from "./components/pages/About";
import { Contact } from "lucide-react";
import AllJobs from "./components/pages/AllJobs";
import MyJobs from "./components/pages/MyJobs";
import JobDetails from "./components/pages/JobDetails";
import PostJobs from "./components/pages/PostJobs";
import OnBoard from "./components/pages/OnBoard";
import Appileants from "./components/pages/Appileants";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/alljobs",
        element: <AllJobs />,
      },
      {
        path: "/myJobs",
        element: <MyJobs />,
      },
      {
        path: "/job/:Id",
        element: <JobDetails />,
      },
      {
        path: "/postJobs",
        element: <PostJobs />,
      },
      {
        path: "/onBoard",
        element: <OnBoard />,
      },
      {
        path: "/appilliats",
        element: <Appileants />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
