const fn = require("./../each.js");
const data = require("./data.js");

fn.each(data.items, (item, index) => {
    console.log(`Item at index ${index} is ${item}`);
});