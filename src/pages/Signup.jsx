import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  return (
    <form className="flex mt-10 justify-center items-center ">
      <div className="p-5 m-7 h-[550px] w-[400px] bg-gray-50 rounded-lg shadow-xl">
        <p className="p-5 font-medium text-[30px]">회원가입</p>
        <AuthForm className="h-[330px]">
          <input
            placeholder="닉네임"
            className="p-3 m-3 w-[270px] rounded-md"
          />
          <br />
          <button
            type="submit"
            className="p-3 m-3 w-[270px] text-white bg-violet-400 rounded-md"
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
    </form>
  );
};

export default Signup;
