// Task 1.2
const fs = require('fs');

const csvFilePath = './csv/nodejs-hw1-ex1.csv';
const csv = require('csvtojson');
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
        writeInFile(JSON.stringify(line));
      });
      console.log('FILE WRITTEN');
    }
  });

const writeInFile = (text) => {
  try {
    const outputFilePath = './csv/nodejs-hw1-ex2.txt';
    const fileContent = fs.readFileSync(outputFilePath, 'utf8');

    fs.writeFileSync(outputFilePath, fileContent + text + '\n', 'utf8');
  } catch (e) {
    console.log('Something went wrong on writting', e);
  }
};
