'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const index = th.cellIndex;

  const rowsArray = Array.from(tbody.rows);

  rowsArray.sort((rowA, rowB) => {
    const contentA = rowA.cells[index].textContent.trim();
    const contentB = rowB.cells[index].textContent.trim();

    const cleanA = contentA.replace(/[^0-9.-]+/g, '');
    const cleanB = contentB.replace(/[^0-9.-]+/g, '');

    const isNumber =
      cleanA !== '' && !isNaN(cleanA) && cleanB !== '' && !isNaN(cleanB);

    if (isNumber) {
      return Number(cleanA) - Number(cleanB);
    }

    return contentA.localeCompare(contentB);
  });

  tbody.append(...rowsArray);
});
