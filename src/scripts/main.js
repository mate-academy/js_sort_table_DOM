'use strict';

const tableData = document.querySelector('table');
const tableBody = document.querySelector('tbody');

const sortPeople = (targetName) => {
  if (targetName === 'name') {
    const sortedRows = [...tableBody.rows]
      .sort((a, b) => a.cells[0].textContent
        .localeCompare(b.cells[0].textContent));

    tableData.tBodies[0].append(...sortedRows);
  };

  if (targetName === 'position') {
    const sortedRows = [...tableBody.rows]
      .sort((a, b) => a.cells[1].textContent
        .localeCompare(b.cells[1].textContent));

    tableData.tBodies[0].append(...sortedRows);
  };

  if (targetName === 'age') {
    const sortedRows = [...tableBody.rows]
      .sort((a, b) => a.cells[2].textContent - b.cells[2].textContent);

    tableData.tBodies[0].append(...sortedRows);
  };

  if (targetName === 'salary') {
    const sortedRows = [...tableBody.rows]
      .sort((a, b) => +a.cells[3].textContent.replace(/[$,]/g, '')
        - b.cells[3].textContent.replace(/[$,]/g, ''));

    tableData.tBodies[0].append(...sortedRows);
  };
};

const clickHandler = (e) => {
  sortPeople(e.target.textContent.toLowerCase());
};

tableData.addEventListener('click', clickHandler);
