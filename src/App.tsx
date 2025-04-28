import { fetchMultiplePokemonById } from "@features/pokemon/pokeThunk";
import { Routes, Route } from "react-router";
import { useAppDispatch } from "@app/hooks";
import { useEffect, lazy } from "react";
import Layout from "@components/Layout";

const Main = lazy(() => import("@pages/Main"));
const Search = lazy(() => import("@pages/Search"));
const Detail = lazy(() => import("@pages/Detail"));
const Favorites = lazy(() => import("@pages/Favorites"));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);

  const ROUTES = [
    { element: <Main />, path: "/" },
    { path: "/detail/:pokemonId", element: <Detail /> },
    { element: <Favorites />, path: "/favorites" },
    { element: <Search />, path: "/search" },
  ];

  return (
    <Routes>
      <Route element={<Layout />} path="/">
        {ROUTES.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
