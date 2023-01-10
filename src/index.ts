// import express and run .env on node.
import express from 'express';
import db from "./mongodb/db";
const app = express();
const cors = require("cors");
require("dotenv").config();

// port -> 4000
const port = process.env.port;
// use json middleware
app.use(express.json());
app.use(cors({ allowedHeaders: "*" }));
// requires routes
const createAccount = require("./routes/createaccount");
const generatenewtoken = require("./routes/generatenewtoken");

// import db


db().then(async (database) => {
  app.post("/createaccount", createAccount(database));
  app.post("/generatenewtoken", generatenewtoken(database));
  app.listen(port, () => {
    console.log("Listen at localhost:", port);
  });
  // routing
});
