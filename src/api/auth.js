import axios from "axios";

const authApi = axios.create({
  baseURL: "https://www.nbcamp-react-auth.link",
});

// 회원가입
export const register = async (userData) => {
  const response = await authApi.post("/register", userData);
  return response.data;
};

// 로그인
export const login = async (userData) => {
  const response = await authApi.post("/login", userData);
  return response.data;
};

// 회원 정보 확인
export const getUserProfile = async (token) => {
  const response = await authApi.get("/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// 프로필 변경
export const updateProfile = async (token, formData) => {
  const response = await authApi.patch("/profile", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export default authApi;
