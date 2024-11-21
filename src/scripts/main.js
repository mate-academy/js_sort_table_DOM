'use strict';

const tBody = document.querySelector('tbody');
const trList = Array.from(tBody.querySelectorAll('tr'));
const thead = document.querySelector('thead tr');
const arrOfTd = [];

for (let index = 0; index < trList.length; index++) {
  const tr = trList[index];

  arrOfTd.push(tr);
}

function sort(columnIndex) {
  arrOfTd.sort((a, b) => {
    const cellA = a.children[columnIndex].innerText.toLowerCase();
    const cellB = b.children[columnIndex].innerText.toLowerCase();

    if (columnIndex === 2 || columnIndex === 3) {
      const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
      const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

      return numA - numB;
    } else {
      if (cellA < cellB) {
        return -1;
      }

      if (cellA > cellB) {
        return 1;
      }

      return 0;
    }
  });

  arrOfTd.forEach((tr) => tBody.appendChild(tr));
}

thead.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const columnIndex = Array.from(e.target.parentElement.children).indexOf(
      e.target,
    );

    sort(columnIndex);
  }
});
