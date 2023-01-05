// s  = email , db = database.
async function validateEmail(email, db) {
  try {
    if (!email.includes("@")) {
      throw "Please use a valid email.";
    }
    const userCollection = db.collection("users");
    const y = await userCollection.findOne({
      email: email,
    });
    if (y) {
      throw "Email address already exists";
    }
  } catch (err) {
    throw err;
  }
}

module.exports = validateEmail;
