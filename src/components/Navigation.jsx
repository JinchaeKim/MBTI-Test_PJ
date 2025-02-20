import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-between bg-stone-100 shadow-lg">
      <Link to={"/"}>
        <div className="px-[70px] py-5 hover:text-violet-500 font-bold">
          Home
        </div>
      </Link>
      <Link to={"/login"}>
        <div className="px-[70px] py-5 hover:text-violet-500 font-bold">
          Login
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
