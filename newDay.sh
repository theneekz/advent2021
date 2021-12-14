#!/bin/bash
# Make a new folder for a new day with some starting files
read -p 'Day: ' dayNum
mkdir day$dayNum
cd day$dayNum
echo "/*

*/
const {getInput, getInputArray, print} = require('../utils');
const input = getInput(__dirname, '/test.txt');
const start = Date.now();

console.log('Time', Date.now() - start, 'ms');
" >> 1.js
touch input.txt
touch test1.txt