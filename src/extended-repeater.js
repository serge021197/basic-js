module.exports = function repeater(str, options) {
    let {
        repeatTimes,
        separator,
        addition,
        additionRepeatTimes,
        additionSeparator
    } = options;
    if (!separator) {
        separator = '+';
    };
    if (!additionSeparator) {
        additionSeparator = '|';
    };
    if (typeof (str) != 'string') {
        str = str + '';
    };
    if (typeof addition == 'undefined') {
        addition = '';
    }
    let add = addition;
    if (additionRepeatTimes) {
        for (let i = 1; i < additionRepeatTimes; i++) {
            addition += additionSeparator + add
        }
    }
    let str1 = str + addition;
    str = str1;

    if (repeatTimes) {
        for (let i = 1; i < repeatTimes; i++) {
            str += separator + str1;
        }
    }
    return str;
}