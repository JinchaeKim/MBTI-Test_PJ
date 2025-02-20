import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/results" element={<TestResultPage />} />
    </Routes>
  );
};

export default Router;
