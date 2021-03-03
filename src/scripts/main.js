'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');
  const thIndex = th.cellIndex;
  const rowsList = [...rows];

  switch (th.innerText) {
    case 'Name':
    case 'Position' :
      rowsList.sort((current, next) => {
        const currentString = current.cells[thIndex].innerText;
        const nextString = next.cells[thIndex].innerText;

        return currentString.localeCompare(nextString);
      });
      break;

    case 'Age':
    case 'Salary':
      rowsList.sort((current, next) => {
        const currentNumber
          = current.cells[thIndex].innerText.replace(/[^0-9]/g, '');
        const nextNumber
          = next.cells[thIndex].innerText.replace(/[^0-9]/g, '');

        return currentNumber - nextNumber;
      });
  }

  rows.forEach(row => tbody.removeChild(row));
  rowsList.forEach(rowed => tbody.appendChild(rowed));
});
