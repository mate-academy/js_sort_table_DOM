'use strict';

// # Utility

function extractNumberFromText(text) {
  let numberString = '';

  for (const char of text) {
    numberString += isNaN(char) || char === ' ' ? '' : char;
  }

  if (numberString.length === 0) {
    return Infinity;
  }

  return +numberString;
}

// ## Sorters

function textStringSorter(string1, string2) {
  return string1.localeCompare(string2);
}

function numberStringSorter(string1, string2) {
  // would assigning every Node a property containing
  // parsed salary beforehand optimize this?
  const salary1 = extractNumberFromText(string1);
  const salary2 = extractNumberFromText(string2);

  if (salary1 > salary2) {
    return 1;
  } else if (salary1 < salary2) {
    return -1;
  }

  return 0;
}

// # Main
// ## Getting the references

const table = document.querySelector('table');

const body = table.tBodies[0];
const bodyRows = [...body.rows]; // primarily to make it static

// ## Attaching listeners

table.tHead.rows[0].addEventListener('click', (e) => {
  const columnIndex = e.target.cellIndex;

  let sorter = numberStringSorter;

  // It's a simulation of reading the type of data from some other source,
  // e.g. a data- attribute.
  switch (extractNumberFromText(bodyRows[0].cells[columnIndex].innerText)) {
    case Infinity:
      sorter = textStringSorter;
      break;
    default:
      break;
  }

  bodyRows
    .sort((entryAbove, entryBelow) => {
      return sorter(
        entryAbove.cells[columnIndex].innerText,
        entryBelow.cells[columnIndex].innerText,
      );
    })
    .forEach((entry) => body.insertAdjacentElement('beforeend', entry));
});

// I've then learned that .localeCompare can also compare numbers,
// and I've also learned about Intl.Collator o_0
