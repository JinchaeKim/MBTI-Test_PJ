import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { login, register } from "../api/auth";
import { Navigate, useNavigate } from "react-router-dom";

const AuthForm = ({ children, className, mode }) => {
  const [userInput, setUserInput] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigation = useNavigate();

  // 로그인 함수
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({
        id: userInput.id,
        password: userInput.password,
      });
      if (data.success) {
        localStorage.setItem("accessToken", data?.accessToken);
        setIsAuthenticated(true);
        Navigate("/");
      } else {
        alert("로그인에 실패했습니다!");
      }
    } catch (error) {
      console.error("Login error", error);
      alert(error.response.data.message);
    }
  };

  // 회원가입 함수
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("회원가입 요청:", userInput);
    try {
      const data = await register({
        id: userInput.id,
        password: userInput.password,
        nickname: userInput.nickname,
      });
      if (data.success) {
        alert("회원가입 성공!");
        navigation("/login");
      } else {
        alert("회원가입에 실패했습니다!");
      }
    } catch (error) {
      console.error("Signup error", error);
      alert(error.response.data.message);
    }
    userInput("");
  };

  return (
    <>
      <form
        onSubmit={mode === "login" ? handleLogin : handleSignup}
        className={`p-5 mx-auto w-[350px] bg-gray-200 rounded-lg ${className}`}
      >
        <input
          type="text"
          value={userInput.id}
          onChange={(e) => setUserInput({ ...userInput, id: e.target.value })}
          placeholder="아이디"
          className="p-3 m-3 w-[270px] rounded-md"
        />
        <input
          type="password"
          value={userInput.password}
          onChange={(e) => {
            setUserInput({ ...userInput, password: e.target.value });
          }}
          placeholder="비밀번호"
          className="p-3 m-3 w-[270px] rounded-md"
        />
        {mode === "signup" ? (
          <input
            type="text"
            value={userInput.nickname}
            onChange={(e) => {
              setUserInput({ ...userInput, nickname: e.target.value });
            }}
            placeholder="닉네임"
            className="p-3 m-3 w-[270px] rounded-md"
          />
        ) : (
          <></>
        )}

        {children}
        <br />
        <button
          type="submit"
          className="p-3 m-3 w-[270px] text-white bg-violet-400 rounded-md hover:bg-violet-300"
        >
          {mode === "login" ? "로그인" : "회원가입"}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
