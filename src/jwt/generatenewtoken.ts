import jsonwebtoken from 'jsonwebtoken';
const queryUser = require("../mongodb/query");
import type {Db} from 'mongodb';

async function generatenewtoken(db:Db, token:string) {
  try {
     const key =  process.env.KEY as string;
    const decode = jsonwebtoken.verify(token,key, {
      complete: true,
      ignoreExpiration: true,
    });
    const userdata = queryUser(db, decode.payload);
  } catch (err:any) {
    if (err.message == "jwt expired") {
      console.log(err);
    }
  }
}

export default generatenewtoken;