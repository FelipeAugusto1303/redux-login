const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

const SECRET = "felipedev";

const verifyJWT = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log("token --- ", token);
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end();

    next();
  });
};

const createUser = (req, res) => {
  const user = userService.createUser(req.body);
  return res.json(user);
};

const loginUser = (req, res) => {
  const response = userService.loginUser(req.body);
  if (response.auth) {
    return res.status(200).json(response);
  } else {
    return res.status(401).json({ response: "Unauthorized access!" });
  }
};

const getUserInfo = (req, res) => {
  const user = userService.getUserInfo(req.query.username);

  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({ response: "User not found" });
  }
};

const serverRunning = (req, res) => {
  const response = userService.serverRunning();
  return res.status(200).send(response);
};

module.exports = {
  createUser,
  loginUser,
  getUserInfo,
  serverRunning,
  verifyJWT,
};
