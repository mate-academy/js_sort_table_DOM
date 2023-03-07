'use strict';

const tableData = document.querySelector('table');
const tableBody = document.querySelector('tbody');

const compareCellText = (i) => {
  return (a, b) => {
    return a.cells[i].textContent.localeCompare(b.cells[i].textContent);
  };
};

const compareCellNumber = (i) => {
  return (a, b) => {
    return +a.cells[i].textContent.replace(/[$,]/g, '')
    - +b.cells[i].textContent.replace(/[$,]/g, '');
  };
};

const sortPeople = (targetName) => {
  if (targetName === 'name') {
    const sortedRows = [...tableBody.rows].sort(compareCellText(0));

    tableData.tBodies[0].append(...sortedRows);
  };

  if (targetName === 'position') {
    const sortedRows = [...tableBody.rows].sort(compareCellText(1));

    tableData.tBodies[0].append(...sortedRows);
  };

  if (targetName === 'age') {
    const sortedRows = [...tableBody.rows].sort(compareCellNumber(2));

    tableData.tBodies[0].append(...sortedRows);
  };

  if (targetName === 'salary') {
    const sortedRows = [...tableBody.rows].sort(compareCellNumber(3));

    tableData.tBodies[0].append(...sortedRows);
  };
};

const clickHandler = (e) => {
  sortPeople(e.target.textContent.toLowerCase());
};

tableData.addEventListener('click', clickHandler);
