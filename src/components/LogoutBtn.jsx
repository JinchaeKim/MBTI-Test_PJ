import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const LogoutBtn = () => {
  const { setIsAuthenticated } = useState(AuthContext);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
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
