import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const createUser = async (user) => {
  const response = await axios.post(`${API_URL}/user`, user);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/user`);
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axios.get(`${API_URL}/user/${id}`);
  return response.data;
};

export const updateUser = async (id, body) => {
  const response = await axios.post(`${API_URL}/user/${id}`, body);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/user/${id}`);
  return response.data;
};