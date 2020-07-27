// Task 1.3
const readline = require('readline');
const fs = require('fs');
const csvFilePath = './csv/nodejs-hw1-ex1.csv';
const csv = require('csvtojson');

class Task1 {
  readLine = () => {
    const rd = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });

    rd.on('line', function (line) {
      const strArray = line.split('');
      console.log(strArray.reverse().join(''));
    });
  };
}

class Task2 {
  convertCSV = () => {
    csv()
      .fromFile(csvFilePath)
      .on('error', (e) => {
        console.log('SOMETHING WENT WRONG!', e);
      })
      .then((jsonObj) => {
        if (jsonObj && jsonObj.length) {
          jsonObj.forEach((item) => {
            const line = {
              book: item.Book,
              author: item.Author,
              price: item.Price,
            };
            this.writeInFile(JSON.stringify(line));
          });
          console.log('FILE WRITTEN');
        }
      });
  };

  writeInFile = (text) => {
    const outputFilePath = './csv/nodejs-hw1-ex2.txt';
    const fileContent = fs.readFileSync(outputFilePath, 'utf8');

    fs.writeFileSync(outputFilePath, fileContent + text + '\n', 'utf8');
  };
}

exports.Task1 = Task1;
exports.Task2 = Task2;
