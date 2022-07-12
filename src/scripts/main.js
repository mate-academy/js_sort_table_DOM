'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const rows = table.querySelectorAll('tbody tr');
const tbody = table.querySelector('tbody');

headers[0].setAttribute('data-type', 'text');
headers[1].setAttribute('data-type', 'text');
headers[2].setAttribute('data-type', 'age');
headers[3].setAttribute('data-type', 'salary');

const transform = (index, content) => {
  const type = headers[index].getAttribute('data-type');

  switch (type) {
    case 'age':
      return parseFloat(content);
    case 'salary':
      return parseFloat(content.slice(1).replaceAll(',', ''));
    case 'text':
      return content.toLowerCase().replaceAll(' ', '');
  }
};

const sortColumn = (index) => {
  const newRows = Array.from(rows);

  newRows.sort((rowA, rowB) => {
    const cellA = rowA.querySelectorAll('td')[index].innerHTML;
    const cellB = rowB.querySelectorAll('td')[index].innerHTML;

    const a = transform(index, cellA);
    const b = transform(index, cellB);

    switch (true) {
      case a > b:
        return 1;
      case a < b:
        return -1;
      case a === b:
        return 0;
    }
  });

  [].forEach.call(rows, (row) => {
    tbody.removeChild(row);
  });

  newRows.forEach((newRow) => {
    tbody.appendChild(newRow);
  });
};

[].forEach.call(headers, (header, index) => {
  header.addEventListener('click', () => {
    sortColumn(index);
  });
});
