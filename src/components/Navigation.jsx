import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LogoutBtn from "./LogoutBtn";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="flex justify-between bg-stone-100 shadow-lg">
      <Link to={"/"}>
        <div className="px-[70px] py-5 hover:text-violet-500 font-bold">
          Home
        </div>
      </Link>
      {!isAuthenticated ? (
        <Link to={"/login"}>
          <div className="px-[70px] py-5 hover:text-violet-500 font-bold">
            Login
          </div>
        </Link>
      ) : (
        <div className="flex">
          <Link to={"/profile"}>
            <div className="px-[70px] py-5 m-3 hover:text-violet-500">
              Profile
            </div>
          </Link>
          <Link to={"/test"}>
            <div className="px-[70px] py-5 m-3 hover:text-violet-500">Test</div>
          </Link>
          <Link to={"/results"}>
            <div className="px-[70px] py-5 m-3 hover:text-violet-500">
              Results
            </div>
          </Link>
          <LogoutBtn />
        </div>
      )}
    </div>
  );
};

export default Navigation;
