import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthForm = ({ children, className }) => {
  const { id, setId, password, setPassword } = useContext(AuthContext);
  return (
    <>
      <form
        className={`p-5 mx-auto w-[350px] bg-gray-200 rounded-lg ${className}`}
      >
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
          className="p-3 m-3 w-[270px] rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="비밀번호"
          className="p-3 m-3 w-[270px] rounded-md"
        />
        {children}
      </form>
    </>
  );
};

export default AuthForm;
