import { useNavigate, Link } from "react-router";
import { NAVIGATION_URL } from "@constants/url";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between gap-6 p-6">
      <div className="mr-auto text-xl font-bold">포켓몬 도감</div>
      <div className="flex items-center gap-2">
        <IoIosSearch size={20} />
        <input
          className="w-62 border-b-2 border-gray-400 focus:border-blue-400 focus:outline-none"
          onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
          placeholder="검색어를 입력해주세요"
          type="text"
        />
      </div>
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
