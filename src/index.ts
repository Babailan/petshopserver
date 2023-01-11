// import express and run .env on node.
import express from "express";
import db from "./mongodb/db";
import createAccount from "./routes/createaccount";
import generatenewtoken from "./routes/generatenewtoken";
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = process.env.port;
app.use(express.json());
app.use(cors({ allowedHeaders: "*" }));

db().then(async (database) => {
  app.post("/createaccount", createAccount(database));
  app.post("/generatenewtoken", generatenewtoken(database));
  app.listen(port, () => {
    console.log("Listen at localhost:", port);
  });
  // routing
});
