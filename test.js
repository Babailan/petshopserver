const {MongoClient, ObjectId} = require("mongodb");
const db = new MongoClient().db("petshop");

const userCollection = db.collection("users");
userCollection.findOne({_id:ObjectId("")})