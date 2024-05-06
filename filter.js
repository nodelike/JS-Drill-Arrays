function filter(elements, cb) {
    try {
        let filteredValues = []
        for (let i = 0; i < elements.length; i++) {
            const result = cb(elements[i]);
            if (result !== undefined) {
                filteredValues.push(result);
            }
        }
        return filteredValues ;
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    };
}

module.exports.filter = filter;