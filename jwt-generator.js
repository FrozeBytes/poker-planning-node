const jwt = require("jsonwebtoken");
let obj = { "id": 1, "username": "mkhizeryounas" };
let privateKey = '-----BEGIN RSA PRIVATE KEY-----\n' +
'MIIBOQIBAAJBAKJuOqv0AyBRoLiUYkgnSwF6vPC9v9ohyX8s18UXmx0IDDQej64y\n' +
'kDzOQmfFSgTayYWuRD8cR3lDL2I/8oS8+osCAwEAAQJAXN9p7Ke4oeIKY390Mo1E\n' +
'9bOYFI5qA+8Npwmc1bSJnC70hE85p8ZjRhezqdbqzmJwFPktWdsYgKXRcxo94Abz\n' +
'AQIhANGQZ/ltas5Iec6rbtCMfTNnw8YEsi39lVhNimVD3pTNAiEAxmwot/tCi28C\n' +
'E4isB/jSVo7go7NAb92heVe+niBDDLcCIDgOAmHLjLgk1sAbRwbtrUekx88dznNS\n' +
'0zHNe+leYBk5AiAKP6HmxtKMEyK/UYrZKo/qqpyNt/93B7KEavTMhAwShwIgddwp\n' +
'5JYnnJSlJBwHisl2+X3yB3xphCG3uapac8ZgeHk=\n' +
'-----END RSA PRIVATE KEY-----'
obj["access_token"] = jwt.sign(obj, privateKey, { algorithm: "RS256" });
console.log("User", obj);