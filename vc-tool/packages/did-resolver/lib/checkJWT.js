const { getResolver } = require('ethr-did-resolver');
const { Resolver } = require('did-resolver');
const { verifyCredential } = require('did-jwt-vc');
const { generateJWT } = require('../../credential-w3c/lib/generateJWT')

async function checkJWT () {
  try {
    const providerConfig = {
      rpcUrl: 'https://dev.uniresolver.io/1.0/identifiers',
      did: 'did:key:z6Mkk2U8pdcHkdzKVBtLmCYYPAAGmrZ93LUSTKDrVp9uQzYu'
    }
    // url :https://dev.uniresolver.io/1.0/identifiers/{did}
    // example:https://dev.uniresolver.io/1.0/identifiers/did:bid:ef214PmkhKndUcArDQPgD5J4fFVwqJFPt
    // url 为空，则调用did-manager 中查询接口，不为空则直接在线解析

    if (!providerConfig.rpcUrl) {
      // 调用调用did-manager 中查询接口
      return false
    }

    const resolver = new Resolver(getResolver(providerConfig));

    const vcJWT = await generateJWT();
    // const vcJWT = 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDI3NDUyODAsInZjIjp7IkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIl0sInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJHdWVzdENyZWRlbnRpYWwiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsiZmlyc3ROYW1lIjoi6YOtIiwibGFzdE5hbWUiOiLkuJbmnbAiLCJlbWFpbCI6Ijk0OTU1Mjk4M0BxcS5jb20iLCJ0eXBlIjoiU3BoZXJlb24gR3Vlc3QiLCJpZCI6ImRpZDpqd2s6ZXlKaGJHY2lPaUpGVXpJMU5rc2lMQ0oxYzJVaU9pSnphV2NpTENKcmRIa2lPaUpGUXlJc0ltTnlkaUk2SW5ObFkzQXlOVFpyTVNJc0luZ2lPaUpKV0VoMVVrNU5lVlphU205T2VHNTZNVlYyVFVWMVV6Vm9UbGw0VHpGYVYzVmFjMVV3T0hjMVVFWkZJaXdpZVNJNklsbHliMjlJZURJdE5sQlpNVVZzWjBFek4zTTRWSFJsV0RseVNHOWlaMFZvZDFoTGQwZDBRMGhoUW5jaWZRIn19LCJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiR3Vlc3RDcmVkZW50aWFsIl0sImV4cGlyYXRpb25EYXRlIjoiMjAyMy0xMi0xNlQxNjo0ODowMC4zODNaIiwiY3JlZGVudGlhbFN1YmplY3QiOnsiZmlyc3ROYW1lIjoi6YOtIiwibGFzdE5hbWUiOiLkuJbmnbAiLCJlbWFpbCI6Ijk0OTU1Mjk4M0BxcS5jb20iLCJ0eXBlIjoiU3BoZXJlb24gR3Vlc3QiLCJpZCI6ImRpZDpqd2s6ZXlKaGJHY2lPaUpGVXpJMU5rc2lMQ0oxYzJVaU9pSnphV2NpTENKcmRIa2lPaUpGUXlJc0ltTnlkaUk2SW5ObFkzQXlOVFpyTVNJc0luZ2lPaUpKV0VoMVVrNU5lVlphU205T2VHNTZNVlYyVFVWMVV6Vm9UbGw0VHpGYVYzVmFjMVV3T0hjMVVFWkZJaXdpZVNJNklsbHliMjlJZURJdE5sQlpNVVZzWjBFek4zTTRWSFJsV0RseVNHOWlaMFZvZDFoTGQwZDBRMGhoUW5jaWZRIn0sImlzc3VlciI6ImRpZDprZXk6ejZNa2syVThwZGNIa2R6S1dCdExtQ1lZUEFBR21yWjkzTFVTVEtEclZwOXVRell1IiwiaXNzdWFuY2VEYXRlIjoiMjAyMy0xMi0xM1QwMjoyNDowMC4zODNaIiwic3ViIjoiZGlkOmp3azpleUpoYkdjaU9pSkZVekkxTmtzaUxDSjFjMlVpT2lKemFXY2lMQ0pyZEhraU9pSkZReUlzSW1OeWRpSTZJbk5sWTNBeU5UWnJNU0lzSW5naU9pSkpXRWgxVWs1TmVWWmFTbTlPZUc1Nk1WVjJUVVYxVXpWb1RsbDRUekZhVjNWYWMxVXdPSGMxVUVaRklpd2llU0k2SWxseWIyOUllREl0TmxCWk1VVnNaMEV6TjNNNFZIUmxXRGx5U0c5aVowVm9kMWhMZDBkMFEwaGhRbmNpZlEiLCJuYmYiOjE3MDI0MzQyNDAsImlzcyI6ImRpZDprZXk6ejZNa2syVThwZGNIa2R6S1dCdExtQ1lZUEFBR21yWjkzTFVTVEtEclZwOXVRell1In0.eVUfrtCc8XcopEafvUiLhN5QUz1HkvE5RGN5yLwGBTCpnIoD-o2YhRVonXdHVUpFQtipZYr6g8KsKftVgF7Bw'

    const verifiedJWT = await verifyCredential(vcJWT, resolver);

    return {
      errorCode: 0,
      data: verifiedJWT,
      message: 'success',
    };

  } catch (error) {
    return {
      errorCode: 100001,
      message: error
    };
  }

}

module.exports = { checkJWT }