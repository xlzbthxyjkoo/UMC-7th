import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Grid from "./components/Grid";
import { GlobalStyle } from "./styles/GridStyle.js";

import RootLayout from "./layout/root-layout.jsx";
import NotFound from "./pages/not-found.jsx";
import Movies from "./pages/movies.jsx";
import LoginPage from "./pages/login.jsx";
import SignupPage from "./pages/signup.jsx";
import SearchPage from "./pages/search.jsx";
import Description from "./pages/description.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Grid />,
      },
      {
        path: "movies",
        element: <Movies />,
        children: [
          { path: "category/:category", element: <Grid /> },
          { path: ":movieId", element: <Description /> },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
