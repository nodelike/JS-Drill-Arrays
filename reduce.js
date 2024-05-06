function reduce(elements, cb, startingValue) {
  try {
    let accumulator = startingValue;
    let index = 0;
  
    if (accumulator === undefined) {
      accumulator = elements[0];
      index = 1;
    }
  
    for (; index < elements.length; index++) {
      accumulator = cb(accumulator, elements[index]);
    }
  
    return accumulator;
  } catch (error) {
    console.log(`Invalid input. ${error}`);
  };
}

module.exports.reduce = reduce;