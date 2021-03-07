const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || (members.constructor !== Array)) return false;

  return members.filter((i) => typeof(i) == 'string' )
                .map((i) => {
                  return i.trim().slice(0, 1).toUpperCase();                  
                 })
                .sort()
                .join('');
};
