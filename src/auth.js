const jwt = require('jsonwebtoken')
const secret = 'a1271bfd0eb224fc50283b63330c7233679742bf2bce8e397c57dc680abf374efa30883525fa7c9b0911b479629ca1536d8cf22d05ffa5c108f4819707a88e74';

function generateAccessToken(username) {
  return jwt.sign(username, secret, { expiresIn: '5s' });
}

console.dir(generateAccessToken({'username':'franz'}));

jwt.verify(generateAccessToken({'username':'franz'}), secret, (err, decoded) => {
  if (err) throw err;
  console.log('verified!', decoded);
})