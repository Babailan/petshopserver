import generatenewtoken from "../jwt/generatenewtoken";
import type { Db } from "mongodb";
import type { Request, Response } from "express";
function routes(db:Db) {
  return async function(req:Request, res:Response) {
    try {
      const { token } = req.body;
      await generatenewtoken(db, token);
      res.send("HELLO").end();
    } catch (error) {
      res.send(error).end();
    }
  };
}

module.exports = routes;