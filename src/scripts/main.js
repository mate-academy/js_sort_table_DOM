'use strict';

const tableHeaders = document.querySelectorAll('thead th');
const rows = document.querySelectorAll('tbody tr');

const names = [];
const positions = [];
const ages = [];
const salaries = [];
const salariesWithoutDollarSign = [];

rows.forEach((row) => {
  const cells = row.querySelectorAll('td');

  names.push(cells[0].textContent.trim());
  positions.push(cells[1].textContent.trim());
  ages.push(Number(cells[2].textContent.trim()));
  salaries.push(cells[3].textContent.trim());

  salariesWithoutDollarSign.push(
    Number(cells[3].textContent.trim().replace('$', '').replace(/,/g, '')),
  );
});

names.sort();
positions.sort();
ages.sort((a, b) => a - b);
salariesWithoutDollarSign.sort((a, b) => a - b);

// sorting by clicked header
tableHeaders.forEach((header, index) => {
  header.addEventListener('click', function () {
    let sortedArray;

    if (index === 0) {
      sortedArray = names;
    }

    if (index === 1) {
      sortedArray = positions;
    }

    if (index === 2) {
      sortedArray = ages;
    }

    if (index === 3) {
      sortedArray = salariesWithoutDollarSign.map(
        (s) => '$' + s.toLocaleString(),
      );
    }

    rows.forEach((row, i) => {
      row.querySelectorAll('td')[index].textContent = sortedArray[i];
    });
  });
});
