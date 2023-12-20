const Ajv = require("ajv");
const schema = require("./schema.json");

async function checkSchema (userData) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(userData);
  if (valid) {
    console.log("User data is valid!");
    return true
  } else {
    console.log("User data is invalid:", validate.errors);
    return false
  }
}

module.exports = { checkSchema }