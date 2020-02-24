module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let str = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) == 'string') {
      str += members[i][0];
    }
  }
  str = str.toUpperCase().split("").sort().join("");
  return str;
};