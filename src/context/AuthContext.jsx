import { createContext, useState } from "react";

export const AuthContext = createContext();
const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const login = (token) => {
    localStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={
        (isAuthenticated,
        login,
        logout,
        id,
        setId,
        password,
        setPassword,
        nickname,
        setNickname)
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
