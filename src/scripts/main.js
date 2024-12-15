'use strict';

function rowToObj(row) {
  const cells = row.querySelectorAll('td');

  return {
    name: cells[0]?.textContent.trim() || null,
    position: cells[1]?.textContent.trim() || null,
    age: Number(cells[2]?.textContent.trim()) || null,
    salary: parseFloat(cells[3]?.textContent.replace(/[$,]/g, '')) || null,
  };
}

function sortTableArr(a, b, col) {
  if (a[col] < b[col]) {
    return -1;
  }

  if (a[col] > b[col]) {
    return 1;
  }

  return 0;
}

function sortTable(element) {
  if (element.tagName === 'TH') {
    const col = element.textContent.toLowerCase();
    const tbody = document.querySelector('tbody');
    const arr = [...tbody.querySelectorAll('tr')].map((row) => rowToObj(row));

    arr.sort((a, b) => sortTableArr(a, b, col));

    tbody.innerHTML = '';

    arr.forEach((obj) => {
      const newRow = document.createElement('tr');

      Object.values(obj).forEach((data, index) => {
        const cell = document.createElement('td');

        cell.textContent =
          index === 3 && typeof data === 'number'
            ? `$${data.toLocaleString('en-US')}`
            : data;
        newRow.appendChild(cell);
      });

      tbody.appendChild(newRow);
    });
  }
}

document.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'TH') {
    sortTable(ev.target);
  }
});
