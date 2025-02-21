import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// PublicRoute : 로그인이 필요 없는 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인 되어있는 사용자는 profile로 리다이렉트
const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/profile" />;
};

// PrivateRoute : 로그인이 필요한 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되이있지 않은 사용자는 login 페이지로 리다이렉트
const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<PublicRoute element={Login} />} />
      <Route path="/profile" element={<PrivateRoute element={Profile} />} />
      <Route path="/signup" element={<PublicRoute element={Signup} />} />
      <Route path="/test" element={<PrivateRoute element={TestPage} />} />
      <Route
        path="/results"
        element={<PrivateRoute element={TestResultPage} />}
      />
    </Routes>
  );
};

export default Router;
