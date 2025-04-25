import { Routes, Route } from "react-router";

import Layout from "./components/Layout";
import Main from "./pages/Main";

function App() {
  const ROUTES = [{ element: <Main />, path: "/" }];

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
