const a = require("lodash");

console.log("----------------");
console.log("it's alive!!");
console.log("----------------");

function getType(vrijednost) {
  console.log(`Ulazna vrijednost za provjeru je ${vrijednost}`);

  if (a.isNumber(vrijednost)) {
    console.log(`>> ulazna vrijednost je broj`);
  }
  if (a.isString(vrijednost)) {
    console.log(`>> ulazna vrijednost je string`);
  }
  if (a.isArray(vrijednost)) {
    console.log(`>> ulazna vrijednost je array`);
  }
  if (a.isObject(vrijednost)) {
    console.log(`>> ulazna vrijednost je objekt`);
  }
}

const myNumbers = [1, 9, 4, 7, 3, 9];
const myObject = { ime: "Marko" };

getType(1);
getType("neka riječ");

getType(myNumbers); // ulazna vrijednost je array
getType(myObject); // ulazna vrijednost je objekt

const sortedNumbers = a.sortBy(myNumbers);
console.log(sortedNumbers);
