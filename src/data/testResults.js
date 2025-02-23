import axios from "axios";

const jsonApi = "http://localhost:5000/testResults";

export const getTestResults = async () => {
  const response = await axios.get(jsonApi);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(jsonApi, resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${jsonApi}/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${jsonApi}/${id}`, { visibility });
  return response.data;
};
