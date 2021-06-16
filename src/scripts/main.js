'use strict';

// write code here
const table = document.querySelector('table');
const tableRows = table.tBodies[0].rows;

function formatData(string) {
  const recString = string.slice(1);
  const number = +recString.split(',').join('');

  return number;
}

table.tHead.onclick = function(e) {
  const target = e.target;
  const index = target.cellIndex;

  const sortedArr = Array.from(tableRows);

  switch (index) {
    case 0:
    case 1:
      sortedArr.sort((a, b) => {
        return a.cells[index].innerText > b.cells[index].innerText
          ? 1 : -1;
      });
      break;
    case 2:
      sortedArr.sort((a, b) => {
        return a.cells[index].innerText - b.cells[index].innerText;
      });
      break;
    case 3:
      sortedArr.sort((a, b) => {
        return formatData(a.cells[index].innerText)
        - formatData(b.cells[index].innerText);
      });
      break;
  }

  table.tBodies[0].append(...sortedArr);
};
