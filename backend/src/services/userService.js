const userModel = require("../models/userModel");

const createUser = (user) => {
  return userModel.createUser(user);
};

const loginUser = (credentials) => {
  return userModel.loginUser(credentials);
};

const getUserInfo = (username) => {
  return userModel.getUserInfo(username);
};

const serverRunning = () => {
  return userModel.serverRunning();
};

module.exports = {
  createUser,
  loginUser,
  getUserInfo,
  serverRunning,
};
