const fn = require("./../reduce.js");
const data = require("./data.js");

const result = fn.reduce(data.items, function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0)

console.log(result);