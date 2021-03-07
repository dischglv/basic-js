const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix || (matrix.length == 0)) return 0;

  return matrix.reduce((pV, cV) => {
    return pV += cV.filter((i) => i == '^^').length;
  }, 0);
};
