"use strict";
const generateNewToken = require("../jwt/generatenewtoken");

function routes(db) {
  return async function (req, res) {
    try {
      const { token } = req.body;
      await generateNewToken(db, token);
      res.send("HELLO").end();
    } catch (error) {
      res.send(error).end();
    }
  };
}

module.exports = routes;
