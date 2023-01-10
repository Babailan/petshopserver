import crypto from 'crypto';

export default function(key:string,password:string) {
    // key from .env
    const hmac=crypto.createHmac("sha512",key);
    hmac.update(password);
    return hmac.digest("base64");
}