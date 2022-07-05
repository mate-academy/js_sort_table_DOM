'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

headers[0].setAttribute('data-type', 'text');
headers[1].setAttribute('data-type', 'text');
headers[2].setAttribute('data-type', 'age');
headers[3].setAttribute('data-type', 'salary');

const directions = Array.from(headers).map(() => '');

const sortColumn = (index) => {
  const type = headers[index].getAttribute('data-type');
  const rows = tbody.querySelectorAll('tbody tr');
  const direction = directions[index] || 'sortUp';
  const multiply = direction === 'sortUp' ? 1 : -1;
  const newRows = Array.from(rows);

  newRows.sort((row1, row2) => {
    const cellA = row1.querySelectorAll('td')[index].textContent;
    const cellB = row2.querySelectorAll('td')[index].textContent;

    const a = transform(type, cellA);
    const b = transform(type, cellB);

    switch (true) {
      case a < b:
        return 1 * multiply;
      case a > b:
        return -1 * multiply;
      case a === b:
        return 0;
    }
  });

  [].forEach.call(rows, (row) => {
    tbody.removeChild(row);
  });

  directions[index] = direction === 'sortUp' ? 'sortDown' : 'sortUp';

  newRows.forEach(newRow => {
    tbody.appendChild(newRow);
  });
};

const transform = (type, content) => {
  switch (type) {
    case 'age':
      return parseFloat(content);
    case 'salary':
      return parseFloat(content.slice(1).replaceAll(',', ''));
    case 'text':
    default:
      return content.replaceAll(' ', '');
  }
};

[].forEach.call(headers, (head, index) => {
  head.addEventListener('click', () => {
    sortColumn(index);
  });
});
