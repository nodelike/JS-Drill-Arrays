const fn = require("./../map.js");
const data = require("./data.js");

const doubled = fn.map(data.items, function(item) {
    return item * 2;
});

console.log(doubled);
