const parser = require('./textWorks');

const test1 = 'wc:Hello World'
console.log(`${test1} ===> ${parser.parse(test1)}`);

const test2 = 'lc:Hello World'
console.log(`${test2} ===> ${parser.parse(test2)}`);
