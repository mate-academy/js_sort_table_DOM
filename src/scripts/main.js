'use strict';

const body = document.querySelector('tbody');
const headers = document.querySelectorAll('thead th');

const stringToInt = (str) => {
  return parseInt(str.replace(/\$|,/g, ''), 10);
};

const sortList = (indexOfChild, isDataNumeric = false) => {
  const rows = [...body.rows];

  rows.sort((row1, row2) => {
    const data1 = row1.cells[indexOfChild].textContent;
    const data2 = row2.cells[indexOfChild].textContent;

    return isDataNumeric
      ? stringToInt(data1) - stringToInt(data2)
      : data1.localeCompare(data2);
  });

  rows.forEach((row) => body.appendChild(row));
};

const addClickListener = (header, index, isDataNumeric) => {
  return header.addEventListener('click', () => sortList(index, isDataNumeric));
};

headers.forEach((header, index) => {
  if (index < 2) {
    addClickListener(header, index);
  } else {
    addClickListener(header, index, true);
  }
});
