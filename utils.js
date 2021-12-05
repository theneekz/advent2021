const fs = require("fs");

const getInputArray = (directory) => {
  const input = fs.readFileSync(directory + "/input.txt", "utf8");
  const inputArr = input.split("\n");
  return inputArr;
};

const getInput = (directory, filename = "/input.txt") => {
  const input = fs.readFileSync(directory + filename, "utf8");
  return input;
};

const print = (input) => {
  console.log(JSON.stringify(input, null, 2));
};

module.exports = { getInputArray, getInput, print };
