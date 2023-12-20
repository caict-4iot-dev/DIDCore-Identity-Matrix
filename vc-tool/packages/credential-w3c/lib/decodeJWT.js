const { jwtDecode } = require('jwt-decode');
const { generateJWT } = require('../lib/generateJWT.js');

async function decodeJWT() {
  const token = await generateJWT();
  const decodedToken = jwtDecode(token);
//   console.log('decodedToken--->', decodedToken)
  return decodedToken;
}

module.exports = { decodeJWT }