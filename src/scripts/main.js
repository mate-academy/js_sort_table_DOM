'use strict';

function convertToNumber(value) {
  return +value.replace(/[^0-9.]/g, '');
}

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');
const sort = (clickEvent) => {
  const th = clickEvent.target.closest('th');
  const thIndex = th.cellIndex;
  const rowList = [...rows];

  if (!th || !thead.contains(th)) {
    return;
  }

  switch (th.innerText) {
    case 'Age':
    case 'Salary':
      rowList.sort((currentItem, nextItem) => {
        const current
          = convertToNumber(currentItem.cells[thIndex].innerText);
        const next
          = convertToNumber(nextItem.cells[thIndex].innerText);

        return current - next;
      });
      break;
    case 'Name':
    case 'Position':
      rowList.sort((currentItem, nextItem) => {
        const current = currentItem.cells[thIndex].innerText;
        const next = nextItem.cells[thIndex].innerText;

        return current.localeCompare(next);
      });
  }

  rows.forEach(row => tbody.removeChild(row));
  tbody.append(...rowList);
};

thead.addEventListener('click', sort);
