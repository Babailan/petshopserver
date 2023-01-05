const jsonwebtoken = require("jsonwebtoken");

function generatetoken(payload) {
  const key = process.env.key;
  return jsonwebtoken.sign(payload, key, { expiresIn: "10s"});
}

module.exports = generatetoken;
