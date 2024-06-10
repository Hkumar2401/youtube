import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ErrorPage from "./components/ErrorPage";
import SearchResultsContainer from "./components/SearchResultsContainer";

function App() {
  const isDarkMode = useSelector((store) => store.config.isDarkMode);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/results",
          element: <SearchResultsContainer />
        }
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div className={`App ${isDarkMode && "dark"}`}>
      <RouterProvider router={appRouter}>
        <Header />
      </RouterProvider>
    </div>
  );
}

export default App;
