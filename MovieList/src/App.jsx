import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Grid from "./components/Grid";
import { GlobalStyle } from "./styles/GridStyle.js";
import { AuthProvider } from "./context/AuthContext.jsx";

import RootLayout from "./layout/root-layout.jsx";
import NotFound from "./pages/not-found.jsx";
import Movies from "./pages/movies.jsx";
import LoginPage from "./pages/login.jsx";
import SignupPage from "./pages/signup.jsx";
import SearchPage from "./pages/search.jsx";
import Description from "./pages/description.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

// 전역에서 queryClient에 접근할 수 있도록 설정
window.queryClient = queryClient;

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
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </AuthProvider>
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
};
export default App;
