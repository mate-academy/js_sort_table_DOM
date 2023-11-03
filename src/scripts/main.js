'use strict';

const heads = document.querySelectorAll('th');
const rows = document.querySelectorAll('tbody > tr');
const tbody = document.querySelectorAll('tbody');

function sortTable(type) {
  let index;

  switch (type) {
    case 'Name':
      index = 0;
      break;

    case 'Position':
      index = 1;
      break;

    case 'Age':
      index = 2;
      break;

    case 'Salary':
      index = 3;
      break;

    default:
      index = 0;
      break;
  }

  Array.from(rows).sort((a, b) => {
    let cellA = a.cells[index].textContent;
    let cellB = b.cells[index].textContent;
    
    if (index === 3) {
      const pattern = /[,$]/ig;

      cellA = cellA.replace(pattern, '');
      cellB = cellB.replace(pattern, '');
    }

    return index === 2 || index === 3 ? +cellA - +cellB : cellA.localeCompare(cellB);
  }).forEach(row => tbody[0].appendChild(row));
}

heads.forEach(head => {
  head.addEventListener('click', () => {
    sortTable(head.textContent);
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   const table = document.querySelector("table");
//   const headers = table.querySelectorAll("thead th");

//   headers.forEach((header, index) => {
//     header.addEventListener("click", () => {
//       sortTable(index);
//     });
//   });

//   function sortTable(column) {
//     const rows = Array.from(table.querySelectorAll("tbody tr"));

//     rows.sort((a, b) => {
//       const cellA = a.cells[column].textContent;
//       const cellB = b.cells[column].textContent;

//       return cellA.localeCompare(cellB);
//     });

//     table.querySelector("tbody").innerHTML = ""; // Clear the table body

//     rows.forEach(row => {
//       table.querySelector("tbody").appendChild(row);
//     });
//   }
// });
