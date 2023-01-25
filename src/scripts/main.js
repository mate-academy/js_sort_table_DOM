'use strict';

const employeesList = document.querySelector('tbody').querySelectorAll('tr');
const titleSort = document.querySelector('thead');
const sumString = string => +string.slice(1).split(',').join('');

titleSort.addEventListener('click', (e) => {
  const sortRow = e.target.cellIndex;

  const sortList = [...employeesList].sort((a, b) => {
    const cellA = a.children[sortRow].textContent;
    const cellB = b.children[sortRow].textContent;

    if (cellA[0] === '$') {
      return sumString(cellA) - sumString(cellB);
    }

    return cellA.localeCompare(cellB);
  });

  document.querySelector('tbody').append(...sortList);
});
