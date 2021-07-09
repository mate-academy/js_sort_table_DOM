'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', e => {
  const tableCeil = e.target;
  const columnforSort = tableCeil.cellIndex;
  let sorted;

  function getString(value) {
    return value.children[columnforSort].innerText;
  }

  function getSalary(value) {
    return getString(value).slice(1).split(',').join('');
  }

  function callbackForString(a, b) {
    return a.localeCompare(b);
  }

  function callbackForNumbers(a, b) {
    return +a - +b;
  }

  switch (tableCeil.innerText) {
    case 'Name':
    case 'Position':
      sorted = [...tableBody.rows].sort(
        (a, b) => callbackForString(getString(a), getString(b))
      );
      break;

    case 'Age':
      sorted = [...tableBody.rows].sort(
        (a, b) => callbackForNumbers(getString(a), getString(b))
      );
      break;

    case 'Salary':
      sorted = [...tableBody.rows].sort(
        (a, b) => callbackForNumbers(getSalary(a), getSalary(b))
      );
      break;
  }

  sorted.forEach(item => tableBody.append(item));
});
