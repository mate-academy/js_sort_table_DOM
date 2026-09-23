'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const rows = [...tBody.rows];

const filterType = (index, a, b) => {
  const textA = a.cells[index].textContent;
  const textB = b.cells[index].textContent;

  if (index === 2 || index === 3) {
    const numA = Number(textA.replace(/\D/g, ''));
    const numB = Number(textB.replace(/\D/g, ''));

    return numA - numB;
  } else {
    return textA.localeCompare(textB);
  }
};

tHead.addEventListener('click', (e) => {
  const title = e.target.closest('th');

  if (!title) {
    return;
  }

  const id = title.cellIndex;

  rows.sort((a, b) => filterType(id, a, b));
  tBody.append(...rows);
});
