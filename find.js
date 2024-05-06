function find(elements, cb) {
  try {
    for (let i = 0; i < elements.length; i++) {
      const result = cb(elements[i]);
      if (result !== undefined) {
        return result;
      }
    }
    return undefined;     
  } catch (error) {
      console.log(`Invalid input. ${error}`);
  };
}

module.exports.find = find;