const fn = require("./../filter.js");
const data = require("./data.js");

const result = fn.filter(data.items, (num) => {
    return num % 2 === 0 ? num : undefined;
});

console.log(result);