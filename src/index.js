exports.min = function min(array) {
    if (array == undefined) { return 0; } else {
        arr1 = array.sort((a, b) => a - b);
        return arr1[0] || 0;
    }
}

exports.max = function max(array) {
    if (array == undefined) { return 0; } else {
        arr1 = array.sort((a, b) => a - b);
        return arr1[arr1.length - 1] || 0;
    }
}

exports.avg = function avg(array) {
    if (array == undefined) { return 0; } else {
        var sum = 0;
        array.forEach(element => {
            sum += element;
        });
        return sum / (array.length) || 0;
    }
}