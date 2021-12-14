#!/bin/bash
# Make a new folder for a new day with some starting files
read -p 'Day: ' dayNum
mkdir day$dayNum
cd day$dayNum
echo "/*

*/
const {getInput, getInputArray, print} = require('../utils')
" >> 1.js
touch input.txt