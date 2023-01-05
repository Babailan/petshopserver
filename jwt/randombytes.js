const { randomBytes } = require("crypto");

function generateToken() {
  return randomBytes(34).toString("base64");
}

module.exports = generateToken;
