import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-between bg-stone-100 shadow-lg">
      <Link to={"/"}>
        <div className="px-10 py-5">Home</div>
      </Link>
      <Link to={"/login"}>
        <div className="px-10 py-5">Login</div>
      </Link>
    </div>
  );
};

export default Navigation;
