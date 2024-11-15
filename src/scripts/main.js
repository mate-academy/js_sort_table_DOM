'use strict';

// write code here
const table = document.querySelector('table');
const thead = document.querySelector('thead');
const tbody = table.querySelector('tbody');
const rows = [...table.querySelectorAll('tbody tr')];
const headerCells = thead.querySelectorAll('th');

headerCells[0].addEventListener('click', () => {
  const sortedRows = rows.sort((rowA, rowB) => {
    const nameA = rowA.querySelector('td:nth-child(1)').textContent.trim();
    const nameB = rowB.querySelector('td:nth-child(1)').textContent.trim();

    return nameA.localeCompare(nameB);
  });

  tbody.innerHTML = '';

  sortedRows.forEach((row) => tbody.appendChild(row));
});

headerCells[1].addEventListener('click', () => {
  const sortedRows = rows.sort((rowA, rowB) => {
    const posA = rowA.querySelector('td:nth-child(2)').textContent.trim();
    const posB = rowB.querySelector('td:nth-child(2)').textContent.trim();

    return posA.localeCompare(posB);
  });

  tbody.innerHTML = '';

  sortedRows.forEach((row) => tbody.appendChild(row));
});

headerCells[2].addEventListener('click', () => {
  const sortedRows = rows.sort((rowA, rowB) => {
    const ageA = parseInt(
      rowA.querySelector('td:nth-child(3)').textContent.trim(),
      10,
    );
    const ageB = parseInt(
      rowB.querySelector('td:nth-child(3)').textContent.trim(),
      10,
    );

    return ageA - ageB;
  });

  tbody.innerHTML = '';

  sortedRows.forEach((row) => tbody.appendChild(row));
});

headerCells[3].addEventListener('click', () => {
  const sortedRows = rows.sort((rowA, rowB) => {
    const salA = parseInt(
      rowA
        .querySelector('td:nth-child(4)')
        .textContent.trim()
        .replace(/[$,]/g, ''),
      10,
    );
    const salB = parseInt(
      rowB
        .querySelector('td:nth-child(4)')
        .textContent.trim()
        .replace(/[$,]/g, ''),
      10,
    );

    return salA - salB;
  });

  tbody.innerHTML = '';

  sortedRows.forEach((row) => tbody.appendChild(row));
});
