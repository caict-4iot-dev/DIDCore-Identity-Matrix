const { generateJWT } = require('../lib/generateJWT.js')

describe('generate JWT Tests', () => {
  test('ajv test', async () => {
    const result = await generateJWT();
    console.log(result)
  });

});