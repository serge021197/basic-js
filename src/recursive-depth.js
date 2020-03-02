module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        if (arr.some(item => Array.isArray(item))) {
            let countArr = [];
            for (let item of arr) {
                if (Array.isArray(item)) {
                    countArr.push(item);
                }
            }
            depth += Math.max(...countArr.map(item => this.calculateDepth(item)));
        }
        return depth;

    }
};