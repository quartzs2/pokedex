import { IoMdHeartEmpty, IoIosSearch } from "react-icons/io";
import { useNavigate, Link } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between gap-6 p-6">
      <Link to={"/"}>
        <div className="mr-auto font-[NeoDunggeunmo] text-xl font-bold">
          포켓몬 도감
        </div>
      </Link>
      <div className="flex items-center gap-6">
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
          <Link to={"/favorites"}>
            <IoMdHeartEmpty size={20} />
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
