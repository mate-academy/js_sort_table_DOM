'use strict';

function convertToNumber(value) {
  return +value.replace(/[^0-9.]/g, '');
}

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');
const sort = (e) => {
  const th = e.target.closest('th');
  const index = th.cellIndex;
  const rowList = [...rows];

  if (!th || !thead.contains(th)) {
    return;
  }

  switch (th.innerText) {
    case 'Name':
      rowList.sort((currentItem, nextItem) => {
        const current = currentItem.querySelector('td').innerText;
        const next = nextItem.querySelector('td').innerText;

        return current.localeCompare(next);
      });
      break;
    case 'Age':
    case 'Salary':
      rowList.sort((currentItem, nextItem) => {
        const current
 = convertToNumber(currentItem.cells[index].innerText);
        const next
          = convertToNumber(nextItem.cells[index].innerText);

        return current - next;
      });
      break;
    case 'Position' :
      rowList.sort((currentString, nextString) => {
        const currentStringText = currentString.cells[index].innerText;
        const nextStringText = nextString.cells[index].innerText;

        return currentStringText.localeCompare(nextStringText);
      });
  }

  rows.forEach(row => tbody.removeChild(row));
  rowList.forEach(rowed => tbody.appendChild(rowed));
};

thead.addEventListener('click', sort);
