const { ObjectId } = require("mongodb");
// query using id
module.exports = async (db, id) => {
  const usercollection = db.collection("users");
  return await usercollection.findOne({ _id: ObjectId(id) });
};
