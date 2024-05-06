const fn = require("./../flatten.js");

const nestedArray = [1, [2], [[3]], [[[4, [5, 6]]]]]; // use this to test 'flatten'

fn.flatten(nestedArray);
console.log(fn.result);