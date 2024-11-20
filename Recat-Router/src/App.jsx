import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Movie from "./assets/pages/Movie";
import Contact, { contactData } from "./assets/pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import PageNotFound from "./assets/pages/PageNotFound";
import GetApiData from "./api/GetApiData";
import MovieDetails from "./assets/pages/MovieDetails";
import GetMovieDetails from "./api/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <PageNotFound />,
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
          path: "/movies",
          element: <Movie />,
          loader: GetApiData,
        },
        {
          path: "/movies/:MovieId",
          element: <MovieDetails />,
          loader:GetMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action:contactData,
        },
      ],
    },
    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
