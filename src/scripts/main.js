'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRows = tableBody.querySelectorAll('tr');

function getData(employee, index) {
  const data = employee.cells[index].innerHTML;

  if (data[0] === '$') {
    return +data.split(',').join('').slice(1);
  }

  return data;
}

function sortList(e) {
  const column = e.target.cellIndex;

  const sortedArr = [...tableRows].sort((employee1, employee2) => {
    const prev = getData(employee1, column);
    const curr = getData(employee2, column);

    if (Number(prev)) {
      return prev - curr;
    }

    return prev.localeCompare(curr);
  });

  tableBody.append(...sortedArr);
}
tableHead.addEventListener('click', sortList);
