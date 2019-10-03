module.exports = function lar(d, arr) {
    return new Promise((resolve, reject) => {
        if (!d || !arr || !(Array.isArray(arr))) {
            reject("Please give valid arguments");
        } else {
            let len = arr.length || 0;
            if (isNaN(d) || d < 0) {
                reject("Please give valid number of rotations");
            }
            if (len == 0 || len == 1) {
                resolve(arr);
            } else {
                let mod = d % len;
                while (mod !== 0) {
                    var firstElement = arr.shift();
                    arr.push(firstElement);
                    mod--;
                }
                resolve(arr);
            }
        }
    });
};
