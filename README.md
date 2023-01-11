# Welcome to PETSHOPSERVER!

This is an open-source project which is you can do whatever you want with the program I've made.

> I recommend using node >= 18 since some cryptograph function is deprecated.

## Files

> file required to make.

_**/.env**_
this file contains the **KEY & PORT** if you didn't set those two values you can't run the program since it's depending on key and port for running the server locally.

> rootfile

_**/src/index.ts**_
the starting point of execution so if you want to check how the startup works i
recommend look at this one.

> folder structure

_**/src/routes**_
_Routing_ how an application’s endpoints (URIs) respond to client requests.

_**/src/mongodb**_
interaction with mongodatabase and some functions.

_**/src/jwt**_
for creating jsonwebtoken and authorizing tokens.

_**/src/hasher**_
for crypto module built in but I just make it harder :>.

_**/src/validation**_
for client validation payload.
