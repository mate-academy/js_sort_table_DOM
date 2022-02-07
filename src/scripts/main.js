'use strict';

// write code here

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tr = [...tBody.querySelectorAll('tr')];

const tableSort = (item) => {
  const sorted = tr.sort((a, b) => {
    const sortA = a.cells[item].innerText.replace(/\$|,/g, '');
    const sortB = b.cells[item].innerText.replace(/\$|,/g, '');

    if (isNaN(sortA)) {
      return sortA.localeCompare(sortB);
    } else {
      return sortA - sortB;
    }
  });

  return tBody.append(...sorted);
};

tHead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th || !tHead.contains(th)) {
    return;
  }

  const item = e.target.cellIndex;

  tableSort(item);
});
