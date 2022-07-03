'use strict';

// write code here

const tbody = document.querySelector('tbody');
const th = document.querySelectorAll('thead th');
const rows = document.querySelectorAll('tbody tr');

[].forEach.call(th, (title, index) => {
  title.addEventListener('click', () => {
    sortColumn(index);
  });
});

const sortColumn = (index) => {
  const newRows = [...rows];

  newRows.sort((a, b) => {
    const cellA = a.querySelectorAll('td')[index].innerHTML;
    const cellB = b.querySelectorAll('td')[index].innerHTML;

    switch (true) {
      case cellA > cellB: return 1;
      case cellA < cellB: return -1;
      case cellA === cellB: return 0;
    }
  });

  [].forEach.call(rows, (row) => {
    tbody.removeChild(row);
  });

  newRows.forEach((newRow) => {
    tbody.appendChild(newRow);
  });
};
