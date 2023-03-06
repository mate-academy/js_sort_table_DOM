'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const employeeList = tbody.querySelectorAll('tr');

function getData(employee, index) {
  const data = employee.cells[index].innerHTML;

  if (data[0] === '$') {
    return +data.split(',').join('').slice(1);
  }

  return data;
}

function sortList(e) {
  const column = e.target.cellIndex;

  const sortedArr = [...employeeList].sort((employee1, employee2) => {
    const data1 = getData(employee1, column);
    const data2 = getData(employee2, column);

    if (Number(data1)) {
      return data1 - data2;
    }

    return data1.localeCompare(data2);
  });

  tbody.append(...sortedArr);
}

thead.addEventListener('click', sortList);
