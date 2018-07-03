'use strict';

const parser = require('./word');

const tests = [
  ['get array of letters', function() {
    const input = 'this';
    const result = parser.parse(input);
    const expected = ['t', 'h', 'i', 's'];
    return result.length === expected.length &&
           result.join('') === expected.join('');
  }],
];
tests.every( (it) => {
  const [testName, test] = it;
  const result = test();
  if (result !== true) {
    throw new Error(`[${testName}] failed!`);
  }
 console.log(`${testName} ===> ${result}`);
 return result;
});
