/* eslint-disable function-paren-newline */
'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const parseCurrency = (str) => +str.slice(1).split(',').join('');
const parseNumber = (str) => +str.trim();

const columnConfigs = {
  Name: {
    index: 0,
    comparator: (a, b) => a.localeCompare(b),
  },
  Position: {
    index: 1,
    comparator: (a, b) => a.localeCompare(b),
  },
  Age: {
    index: 2,
    comparator: (a, b) => parseNumber(a) - parseNumber(b),
  },
  Salary: {
    index: 3,
    comparator: (a, b) => parseCurrency(a) - parseCurrency(b),
  },
};

function sortByColumn(headerKey) {
  const config = columnConfigs[headerKey];

  if (!config) {
    return;
  }

  const { index, comparator } = config;
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((rowA, rowB) => {
    const valA = rowA.cells[index].textContent;
    const valB = rowB.cells[index].textContent;

    return comparator(valA, valB);
  });

  tbody.append(...rows);
}

thead.addEventListener('click', (clickEvent) => {
  const th = clickEvent.target.closest('th');

  if (!th) {
    return;
  }

  const headerKey = th.textContent.trim();

  sortByColumn(headerKey);
});
