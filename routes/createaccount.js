const hash = require("../hasher/hash");
const generateToken = require("../jwt/generatetoken");
const validateEmail = require("../validation/emailvalidation");
const randombytes = require("../jwt/randombytes");

function routes(db) {
  return async (req, res) => {
    try {
      const key = process.env.KEY;
      const email = req.body.email.toLowerCase();
      const username = req.body.username;
      await validateEmail(email, db); // return email invalid string or null
      const password = hash(key, req.body.password);
      const userCollection = db.collection("users");
      const refreshtoken = randombytes();
      const result = await userCollection.insertOne({
        email,
        password,
        username,
        refreshtoken: [refreshtoken],
      });
      const token = generateToken({
        id: result.insertedId.toHexString(),
        email: email,
        refreshtoken,
      });
      res.cookie("token", token);
      res.send(JSON.stringify({ approved: true, email: "" })).end();
    } catch (err) {
      res.send(JSON.stringify({ approved: false, email: err })).end();
    }
  };
}

module.exports = routes;
