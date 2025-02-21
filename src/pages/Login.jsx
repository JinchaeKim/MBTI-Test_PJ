import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import api from "../api/auth";

const Login = () => {
  const { login, id, password } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(api, {
        id,
        password,
      });
      const data = response.data;
      if (data.success) {
        login(data.accessToken);
        navigate("/test");
      } else {
        alert("로그인에 실패했습니다!");
      }
    } catch (error) {
      console.error("Login error", error);
      alert("로그인에 실패했습니다!");
    }
  };

  return (
    <div className="flex mt-10 justify-center items-center ">
      <div className="p-5 m-7 h-[450px] w-[400px] bg-gray-50 rounded-lg shadow-xl">
        <p className="p-5 font-medium text-[30px]">로그인</p>
        <AuthForm mode="login" onSubmit={handleLogin} className="h-[250px]">
          <button
            type="submit"
            className="p-3 m-3 w-[270px] text-white bg-violet-400 rounded-md hover:bg-violet-300"
          >
            로그인
          </button>
        </AuthForm>
        <div className="flex pt-5">
          <p>계정이 없으신가요?</p>
          <Link to={"/signup"}>
            <p className="px-2 font-bold text-violet-600 hover:text-black">
              회원가입
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
