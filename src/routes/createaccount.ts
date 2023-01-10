const generateToken = require("../jwt/generatetoken");
const validateEmail = require("../validation/emailvalidation");
import { randomBytes } from 'crypto';
import hash from '../hasher/hash';
import type {Db} from 'mongodb';
import { Request, Response } from 'express';

export default function(db:Db) {
  return async (req:Request, res:Response) => {
    try {
      const key = process.env.KEY as string;
      const email = req.body.email.toLowerCase();
      const username = req.body.username;
      await validateEmail(email, db); // return email invalid string or null
      const password = hash(key, req.body.password);
      const userCollection = db.collection("users");
      const refreshtoken = randomBytes(32).toString("base64");

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