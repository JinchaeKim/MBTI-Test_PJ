import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  return (
    <div className="flex mt-10 justify-center items-center">
      <div className="p-5 m-7 h-[550px] w-[400px] bg-gray-50 rounded-lg shadow-xl">
        <p className="p-5 font-medium text-[30px]">회원가입</p>
        <AuthForm mode="signup" className="h-[330px]" />
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
