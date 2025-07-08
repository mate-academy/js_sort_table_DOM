'use strict';

// write code here
const tHead = document.querySelector('thead');
const tHeadTh = [...tHead.querySelectorAll('th')];

const tBody = document.querySelector('tbody');

function sortRow(dataToSort, sortBy) {
  switch (sortBy) {
    case 'Name':
    case 'Position':
      return [...dataToSort].sort((a, b) => a.value.localeCompare(b.value));

    case 'Age':
      return [...dataToSort].sort((a, b) => +a.value - +b.value);

    case 'Salary': {
      return [...dataToSort]
        .map((n) => ({
          value: String(n.value.replace(/[$,]/g, '')),
          row: n.row,
        }))
        .sort((a, b) => +a.value - +b.value);
    }
  }
}

for (const [i, th] of tHeadTh.entries()) {
  th.addEventListener('click', (e) => {
    const dataToSort = [...tBody.rows].map((row) => ({
      value: row.cells[i].textContent,
      row,
    }));

    const sorted = sortRow(dataToSort, e.target.textContent);

    tBody.innerHTML = '';

    for (const row of sorted) {
      tBody.append(row.row);
    }
  });
}
