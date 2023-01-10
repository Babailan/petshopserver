const { ObjectId } = require("mongodb");
import type {Db} from 'mongodb';

export default async (db:Db, id:string) => {
  const usercollection = db.collection("users");
  return await usercollection.findOne({ _id: ObjectId(id) });
};

