const jsonwebtoken = require("jsonwebtoken");
const queryUser = require("../mongodb/query");

async function generatenewtoken(db, token) {
  try {
    const decode = jsonwebtoken.verify(token, process.env.KEY, {
      complete: true,
      ignoreExpiration: true,
    });
    const userdata = queryUser(db, decode.payload);
    console.log(userdata);
    console.log(decode.payload);
  } catch (error) {
    if (error.message == "jwt expired") {
      console.log(error);
    }
  }
}

module.exports = generatenewtoken;
