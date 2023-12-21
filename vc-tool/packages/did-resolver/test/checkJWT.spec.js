const { checkJWT } = require('../lib/checkJWT')

describe('check JWT Tests', () => {
  test('check JWT', async () => {
    const result = await checkJWT();
    console.log('result--->', result)
  });

});