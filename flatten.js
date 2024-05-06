let result = [];
function flatten(elements){
    try {
        for(let element of elements){
            if(Array.isArray(element)){
                flatten(element);
            } else {
                result.push(element);
            }
        }       
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    };
}

module.exports.flatten = flatten;
module.exports.result = result;