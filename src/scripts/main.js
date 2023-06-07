'use strict';

// write code here
const table = document.querySelector('tbody');
const header = document.querySelector('thead');
const row = [...table.rows];

const convertNum = (str) => +str.replace(/\D/g, '');

header.addEventListener('click', (e) => {
  const idx = e.target.cellIndex;

  row.sort((a, b) => {
    const tdA = a.children[idx].innerHTML;
    const tdB = b.children[idx].innerHTML;

    switch (idx) {
      case 2:
      case 3:
        return convertNum(tdA) - convertNum(tdB);

      default:
        return tdA.localeCompare(tdB);
    }
  });

  row.forEach(item => table.appendChild(item));
});
