'use strict';

// const tr = document.querySelectorAll('tr');
// const list = [];

// tr.forEach(row => {
//   list.push(row.children[0]);
//   // console.log(row.children[0].innerHTML);
// });

// console.log(list);

// function sortList(list) {
//   const sorted = list.sort((a, b) => {
//     a.innerText.localeCompare(b.innerText);
//   });

//   console.log(sorted);
//   return sorted;
// }

// console.log(sortList(list));

const table = document.querySelector('table');
const headers = table.tHead.querySelectorAll('th');

headers.forEach(header => {
  header.addEventListener('click', () => {
    sortTable(header);
  });
});

function sortTable(column) {
  const rows = Array.from(table.tBodies[0].querySelectorAll('tr'));

  rows.sort((a, b) => {
    const aValue = a.cells[column.cellIndex].textContent;
    const bValue = b.cells[column.cellIndex].textContent;

    if (!convertToNumber(aValue)) {
      return aValue.localeCompare(bValue);
    }

    return convertToNumber(aValue) - convertToNumber(bValue);
  });

  table.tBodies[0].append(...rows);
}

function convertToNumber(number) {
  return parseFloat(number.replace(/[$,]/g, ''));
}
