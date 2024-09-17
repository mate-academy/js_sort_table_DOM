'use strict';

const table = document.querySelector('table');
const arr = [...table.rows].slice(1, -1);

const convertToNumber = function(letters) {
  let correctSalary = '';

  for (const letter of letters) {
    if (letter !== '$' && letter !== ',') {
      correctSalary += letter;
    }
  }

  return +correctSalary;
};

const sortList = function(index) {
  const tbody = table.querySelector('tbody');

  const compare = function(rowA, rowB) {
    let rowAContent = rowA.cells[index].innerHTML;
    let rowBContent = rowB.cells[index].innerHTML;

    if (index === 3) {
      rowAContent = convertToNumber(rowA.cells[index].innerHTML);
      rowBContent = convertToNumber(rowB.cells[index].innerHTML);
    }

    switch (index) {
      case 0:
      case 1:
        return rowAContent.localeCompare(rowBContent);
      case 2:
      case 3:
        return rowBContent - rowAContent;
    }
  };

  arr.sort(compare);

  table.removeChild(tbody);

  for (let i = 0; i < arr.length; i++) {
    tbody.appendChild(arr[i]);
  }

  table.appendChild(tbody);
};

table.rows[0].addEventListener('click', e => {
  const item = e.target;
  const itemIndex = item.cellIndex;

  sortList(itemIndex);
});
