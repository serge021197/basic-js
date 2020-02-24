module.exports = function createDreamTeam(members) {
  let teamArray = [];

  if (!Array.isArray(members)) return false;

  members.forEach(elem => {
    if (typeof elem === 'string') {
      teamArray.push(elem[0].toUpperCase());
    }
  });

  return teamArray.sort().join('');
};