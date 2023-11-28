const jwt = require("jsonwebtoken");
const users = [];

const SECRET = "felipedev";

const createUser = (user) => {
  const newUser = { id: users.length + 1, ...user };
  users.push(newUser);
  return newUser;
};

const loginUser = (credentials) => {
  const userIndex = users.findIndex(
    (user) => user.username === credentials.username
  );
  if (
    userIndex >= 0 &&
    users[userIndex].username === credentials.username &&
    users[userIndex].password === credentials.password
  ) {
    const token = jwt.sign({ userId: users[userIndex].id }, SECRET, {
      expiresIn: 300,
    });
    return { auth: true, user: users[userIndex].username, token: token };
  } else return { auth: false };
};

const getUserInfo = (username) => {
  const userIndex = users.findIndex((user) => user.username === username);

  return users[userIndex];
};

const serverRunning = () => {
  return "Server is running on port 3001";
};

module.exports = {
  createUser,
  loginUser,
  getUserInfo,
  serverRunning,
};
