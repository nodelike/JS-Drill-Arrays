function map(elements, cb) {
    try {
        const result = [];
        for (let i = 0; i < elements.length; i++) {
            result.push(cb(elements[i]));
        }
        return result;
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    };
}

module.exports.map = map;