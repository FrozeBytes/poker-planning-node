// const NodeRSA = require("node-rsa");
// const jwt = require("jsonwebtoken");

// const key = new NodeRSA({ b: 512 });
// let keypair = {
//   private: key.exportKey(),
//   public: key.exportKey("public")
// };
// console.log(keypair);

// let obj = { "id": 1, "username": "mkhizeryounas" };
// obj["access_token"] = jwt.sign(obj, keypair.private, { algorithm: "RS256" });
// console.log("User", obj);

// jwt.verify(obj["access_token"], keypair.public, { algorithm: "RS256"}, function(err, decoded) {
//   console.log("here");
//   console.dir(err)
//   if(err) throw err;
//   console.log("Verified token", decoded);
// });