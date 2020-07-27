// Task 1.1
const readline = require('readline');
console.log('Type something to revert!');
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

interface.on('line', function(line){
    console.log(reverse(line));
});

const reverse = (str) => {
  const strArray = str.split('');
  return strArray.reverse().join('');
};