'use strict';

const tableHeads = document.querySelectorAll('th');
const tBody = document.querySelector('tbody');
const tableBodyRows = [...tBody.querySelectorAll('tr')];

tableHeads.forEach(head => {
  head.addEventListener('click', (e) => {
    const index = e.target.cellIndex;

    const sorted = tableBodyRows.sort((prev, curr) => {
      let prevContent = prev.cells[index].innerHTML;
      let currContent = curr.cells[index].innerHTML;

      if (index === 3) {
        prevContent = Number(prevContent.slice(1).replace(',', ''));
        currContent = Number(currContent.slice(1).replace(',', ''));

        return prevContent - currContent;
      }

      if (index === 2) {
        return prevContent - currContent;
      }

      return prevContent.localeCompare(currContent);
    });

    tBody.innerHTML = '';

    sorted.forEach(row => {
      tBody.append(row);
    });
  });
});
