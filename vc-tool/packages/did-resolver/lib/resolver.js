// import axios from "axios";
// export class Resolver {
//   static async getResolver() {
//     try {
//         const response = await axios.get('https://dev.uniresolver.io/1.0/identifiers/did:bid:ef214PmkhKndUcArDQPgD5J4fFVwqJFPt');
        
//         // Assuming the response contains JSON data
//         const responseData = response.data;
        
//         // Print the response data
//         console.log('responseData');
//         return {
//           errorCode: 0,
//           data: responseData,
//           message: 'success',
//         };
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//         return {
//           errorCode: 100001,
//           message: 'error',
//         };
//       }
//   }
      
// }

const axios = require('axios');

async function getResolver () {
  try {
    const response = await axios.get('https://dev.uniresolver.io/1.0/identifiers/did:bid:ef214PmkhKndUcArDQPgD5J4fFVwqJFPt');
    
    const responseData = response.data;
    
    return {
      errorCode: 0,
      data: responseData.verificationMethod[0].publicKeyHex,
      message: 'success',
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      errorCode: 100001,
      message: 'error',
    };
  }
}

module.exports = { getResolver }