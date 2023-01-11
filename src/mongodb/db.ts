import { Db, MongoClient } from "mongodb";

async function db(): Promise<Db> {
  // set uri to -> mongodb
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);
  // Connect the client to the server (optional starting in v4.7)
  await client.connect();
  return client.db("petshop");
}

export default db;
