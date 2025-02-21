import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/auth";
import axios from "axios";

const Signup = () => {
  const { id, password, nickname, setNickname } = useContext(AuthContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(api, { id, password, nickname });
      const data = response.data;
      if (data.success) {
        navigator("/login");
      } else {
        alert("회원가입에 실패했습니다!");
      }
    } catch (error) {
      console.error("Signup error", error);
      alert("회원가입에 실패했습니다!");
    }
  };
  return (
    <div className="flex mt-10 justify-center items-center">
      <div className="p-5 m-7 h-[550px] w-[400px] bg-gray-50 rounded-lg shadow-xl">
        <p className="p-5 font-medium text-[30px]">회원가입</p>
        <AuthForm onSubmit={handleSignup} className="h-[330px]">
          <input
            type="text"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            placeholder="닉네임"
            className="p-3 m-3 w-[270px] rounded-md"
          />
          <br />
          <button
            type="submit"
            className="p-3 m-3 w-[270px] text-white bg-violet-400 rounded-md hover:bg-violet-300"
          >
            회원가입
          </button>
        </AuthForm>
        <div className="flex pt-5">
          <p>이미 계정이 있으신가요?</p>
          <Link to={"/login"}>
            <p className="px-2 font-bold text-violet-600 hover:text-black">
              로그인
            </p>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Signup;
