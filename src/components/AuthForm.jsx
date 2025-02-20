const AuthForm = ({ children, className }) => {
  return (
    <>
      <form className={`p-5 w-[350px] bg-gray-200 rounded-lg ${className}`}>
        <input placeholder="아이디" className="p-3 m-3 w-[270px] rounded-md" />
        <input
          placeholder="비밀번호"
          className="p-3 m-3 w-[270px] rounded-md"
        />
        {children}
      </form>
    </>
  );
};

export default AuthForm;
