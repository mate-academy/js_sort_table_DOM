'use strict';

function convertToNumber(value) {
  return +value.replace(/[^0-9.]/g, '');
}

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');
const sorted = (e) => {
  const th = e.target.closest('th');
  const index = th.cellIndex;
  const rowsList = [...rows];

  if (!th || !thead.contains(th)) {
    return;
  }

  switch (th.innerText) {
    case 'Name':
    case 'Age':
    case 'Salary':
      rowsList.sort((currentItem, nextItem) => {
        const currentItemNumber
          = convertToNumber(currentItem.cells[index].innerText);
        const nextItemNumber
          = convertToNumber(nextItem.cells[index].innerText);

        return currentItemNumber - nextItemNumber;
      });
      break;
    case 'Position' :
      rowsList.sort((currentString, nextString) => {
        const currentStringText = currentString.cells[index].innerText;
        const nextStringText = nextString.cells[index].innerText;

        return currentStringText.localeCompare(nextStringText);
      });
  }

  rows.forEach(row => tbody.removeChild(row));
  rowsList.forEach(rowed => tbody.appendChild(rowed));
};

thead.addEventListener('click', sorted);
