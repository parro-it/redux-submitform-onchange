const test = require('tape');
const reduxSubmitformOnvalidation = require('./');

test('it work!', t => {
  const result = reduxSubmitformOnvalidation();
  t.equal(result, 42);
  t.end();
});
