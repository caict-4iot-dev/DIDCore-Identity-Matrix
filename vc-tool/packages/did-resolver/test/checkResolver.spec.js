// import getResolver from '../lib/resolver.js'

const { getResolver } = require('../lib/resolver.js')
 
describe('Resolver Tests', () => {
  test('get resolver', async () => {
    const result = await getResolver();
    console.log('result--->', result)
  });

});
