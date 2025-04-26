import { Outlet } from "react-router";

import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl">
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
