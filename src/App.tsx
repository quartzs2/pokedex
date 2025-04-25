import { fetchMultiplePokemonById } from "@features/pokemon/pokeThunk";
import { Routes, Route } from "react-router";
import { useAppDispatch } from "@app/hooks";
import Favorites from "@pages/Favorites";
import Layout from "@components/Layout";
import Detail from "@pages/Detail";
import Search from "@pages/Search";
import { useEffect } from "react";
import Main from "@pages/Main";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);

  const ROUTES = [
    { element: <Main />, path: "/" },
    { element: <Detail />, path: "/detail" },
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
