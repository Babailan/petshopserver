import type {Db} from "mongodb";

async function validateEmail(email:string, db:Db) {
  try {
    const userCollection = db.collection("users");
    const y = await userCollection.findOne({
      email: email,
    });
    if (y) {
      throw "Email address already exists";
    }
    if (!email.includes("@")) {
      throw "Please use a valid email.";
    }
  } catch (err) {
    throw err;
  }
}

module.exports = validateEmail;
