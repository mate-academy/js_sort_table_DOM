'use strict';

const titles = [...document.querySelectorAll('thead tr th')];

const nameTitle = titles[0];
const positionTitle = titles[1];
const ageTitle = titles[2];
const salaryTitle = titles[3];

// append sorted elems inside a table
const updateTable = function (rows, table) {
  table.innerHTML = '';
  rows.forEach((row) => table.append(row));
};

// sort rows by alphabet in ASC order
const sortByAlphabet = function (rows, cellIndex) {
  rows.sort((a, b) => {
    const wordA = a.cells[cellIndex].innerText.toLowerCase();
    const wordB = b.cells[cellIndex].innerText.toLowerCase();

    return wordA.localeCompare(wordB);
  });
};

// name column
nameTitle.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');
  const tableRows = [...document.querySelectorAll('tbody tr')];

  sortByAlphabet(tableRows, 0);
  updateTable(tableRows, tbody);
});

// position column
positionTitle.addEventListener('click', () => {
  const tableRows = [...document.querySelectorAll('tbody tr')];
  const tbody = document.querySelector('tbody');

  sortByAlphabet(tableRows, 1);
  updateTable(tableRows, tbody);
});

// age column
ageTitle.addEventListener('click', () => {
  const tableRows = [...document.querySelectorAll('tbody tr')];
  const tbody = document.querySelector('tbody');

  tableRows.sort((a, b) => {
    return parseInt(a.cells[2].innerText) - parseInt(b.cells[2].innerText);
  });

  updateTable(tableRows, tbody);
});

// salary column
salaryTitle.addEventListener('click', () => {
  const tableRows = [...document.querySelectorAll('tbody tr')];
  const tbody = document.querySelector('tbody');

  tableRows.sort((a, b) => {
    const salaryA = parseInt(
      a.cells[3].innerText.replace('$', '').replace(',', ''),
    );
    const salaryB = parseInt(
      b.cells[3].innerText.replace('$', '').replace(',', ''),
    );

    return salaryA - salaryB;
  });

  updateTable(tableRows, tbody);
});
