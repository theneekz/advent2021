const fs = require("fs");

const getInputArray = (directory) => {
  const input = fs.readFileSync(directory + "/input.txt", "utf8");
  const inputArr = input.split("\n");
  return inputArr;
};

module.exports = getInputArray;
