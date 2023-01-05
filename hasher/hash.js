const crypto = require("crypto");

function hashed(key,password) {
    // key from .env
    const hmac=crypto.createHmac("sha512",key);
    hmac.update(password);
    return hmac.digest("base64");
}


module.exports = hashed;