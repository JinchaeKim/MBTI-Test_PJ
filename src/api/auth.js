import axios from "axios";

const api = axios.create({ baseURL: "https://www.nbcamp-react-auth.link/" });

export const register = async (userData) => {
  const response = await axios.post(`${api}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${api}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${api}/user`, token);
  return response.data;
};

export const updateProfile = async (formData) => {
  const response = await axios.get(`${api}/profile`, formData);
  return response.data;
};

export default api;
