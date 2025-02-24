import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigation = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    const alertResult = window.confirm("정말 로그아웃 하시겠습니까?");
    alertResult === true ? setIsAuthenticated(false) : setIsAuthenticated(true);
    navigation("/");
  };

  return (
    <div className="flex justify-center items-center ml-[20px] mr-[60px]">
      <button
        onClick={() => logout()}
        className="flex justify-center items-center text-center h-[40px] w-[90px] px-[20px] rounded-lg text-white font-bold bg-violet-400 hover:bg-violet-300"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
