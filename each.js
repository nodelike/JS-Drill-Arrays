function each(elements, cb) {
    try {
        for (let i = 0; i < elements.length; i++) {
            cb(elements[i], i);
        }
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.each = each;