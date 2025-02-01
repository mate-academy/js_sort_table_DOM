'use strict';

// write code here
const headers = document.querySelectorAll('thead > tr > th');
const table = document.querySelector('table');

const headersList = [];

for (const header of headers) {
  const span = document.createElement('span');

  span.textContent = header.textContent.trim();
  header.textContent = '';
  header.prepend(span);

  headersList.push(header);

  header.addEventListener('click', () => {
    const index = [...headers].indexOf(header);

    if (headersList.includes(header)) {
      sortColumn(index);
    }
  });
}

function sortColumn(colIndex) {
  let switching = true;

  while (switching) {
    switching = false;

    const rows = Array.from(table.rows).slice(1, -1);

    for (let i = 0; i < rows.length - 1; i++) {
      let shouldSwitch = false;

      const x = rows[i].getElementsByTagName('td')[colIndex];
      const y = rows[i + 1].getElementsByTagName('td')[colIndex];

      if (
        typeof x.textContent === 'number' &&
        typeof y.textContent === 'number'
      ) {
        if (
          parseInt(x.textContent) > parseInt(y.textContent) ||
          parseInt(x.textContent.replace(/[$,]/g, '')) >
            parseInt(y.textContent.replace(/[$,]/g, ''))
        ) {
          shouldSwitch = true;
        }
      } else {
        if (x.textContent.toLowerCase() > y.textContent.toLowerCase()) {
          shouldSwitch = true;
        }
      }

      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
}
