import { Outlet } from "react-router";
import { Suspense } from "react";

import Header from "./Header";

function LoadingFallback() {
  return <div className="flex justify-center">로딩 중입니다.</div>;
}

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
