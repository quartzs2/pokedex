import { NAVIGATION_URL } from "@constants/url";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between p-4">
      <div className="text-xl font-bold">포켓몬 도감</div>
      <nav className="flex gap-8 font-normal">
        {NAVIGATION_URL.map(({ name, url }) => (
          <Link key={url} to={url}>
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
export default Header;
