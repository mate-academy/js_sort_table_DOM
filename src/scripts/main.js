'use strict';

const headerCells = document.querySelectorAll('thead th');
const tableBody = document.querySelector('tbody');
const rows = document.querySelectorAll('tbody tr');

function clickHandler(e) {
  const targetIndex = [...headerCells].indexOf(e.target);

  const newRows = [...rows].sort((a, b) => {
    const contentA = a.children[targetIndex].innerText;
    const contentB = b.children[targetIndex].innerText;

    if (contentA[0] === '$' || !isNaN(+contentA)) {
      return parseInt(contentA.replace(/\D/g, ''))
      - parseInt(contentB.replace(/\D/g, ''));
    }

    return contentA.localeCompare(contentB);
  });

  tableBody.append(...newRows);
}

headerCells.forEach(cell => {
  cell.onclick = clickHandler;
});
