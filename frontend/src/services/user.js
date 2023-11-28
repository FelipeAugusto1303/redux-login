import { api } from "./api";

export const getUserdata = async (username) => {
  return await api.get(`api/user?username=${username}`);
};

export const createUser = async (body) => {
  return await api.post("api/user", body);
};
