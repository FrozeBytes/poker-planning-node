const jwt = require("jsonwebtoken");
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJta2hpemVyeW91bmFzIiwiaWF0IjoxNjIxODY0MjI2fQ.k4UbXnzYy8BOrfSX2J7Ts2aI1Yejef2HomeBxGFeU4fctRnXXrTelv8ryGX0P7KtZyJXV-njrn2JWB7c7O77_w';
const public_key = '-----BEGIN PUBLIC KEY-----\n' +
'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKJuOqv0AyBRoLiUYkgnSwF6vPC9v9oh\n' +
'yX8s18UXmx0IDDQej64ykDzOQmfFSgTayYWuRD8cR3lDL2I/8oS8+osCAwEAAQ==\n' +
'-----END PUBLIC KEY-----';
jwt.verify(token, public_key, { algorithm: "RS256"}, function(decoded, err) {
  if(err) throw err;
  console.log("Verified token", decoded);
});