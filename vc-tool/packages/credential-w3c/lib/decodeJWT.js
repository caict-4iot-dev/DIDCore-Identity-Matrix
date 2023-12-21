const { jwtDecode } = require('jwt-decode');
const { generateJWT } = require('../lib/generateJWT.js');

async function decodeJWT() {
  try {
    const token = await generateJWT();
    const decodedToken = jwtDecode(token);

    return {
      errorCode: 0,
      data: decodedToken,
      message: 'success',
    };
  } catch (error) {
    return {
      errorCode: 100001,
      message: 'error',
    };
  }

}

module.exports = { decodeJWT }