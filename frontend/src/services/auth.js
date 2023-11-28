import { api } from "./api";

export const login = async (credentials) => {
  return await api.post("api/login", credentials);
};
