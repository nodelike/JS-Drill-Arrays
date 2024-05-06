const fn = require("./../find.js");
const data = require("./data.js");

const result = fn.find(data.items, (num) => {
  return num % 2 === 0 ? num : undefined;
});

console.log(result);