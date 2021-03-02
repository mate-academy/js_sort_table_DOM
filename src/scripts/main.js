'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

function convertToNumber(string) {
  return string.replace(/[^0-9]/g, '');
}

const sorted = (e) => {
  const th = e.target.closest('th');
  const thIndex = th.cellIndex;
  const rowsList = [...rows];

  if (!th || !thead.contains(th)) {
    return;
  }

  switch (th.innerText) {
    case 'Name':
    case 'Position' :
      rowsList.sort((currentString, nextString) => {
        const currentStringText = currentString.cells[thIndex].innerText;
        const nextStringText = nextString.cells[thIndex].innerText;

        return currentStringText.localeCompare(nextStringText);
      });
      break;

    case 'Age':
    case 'Salary':
      rowsList.sort((currentItem, nextItem) => {
        const currentItemNumber
          = convertToNumber(currentItem.cells[thIndex].innerText);
        const nextItemNumber
          = convertToNumber(nextItem.cells[thIndex].innerText);

        return currentItemNumber - nextItemNumber;
      });
  }

  rows.forEach(row => tbody.removeChild(row));
  rowsList.forEach(rowed => tbody.appendChild(rowed));
};

thead.addEventListener('click', sorted);
