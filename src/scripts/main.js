'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const employeeList = tbody.querySelectorAll('tr');

function sortList(e) {
  const column = e.target.cellIndex;

  function getData(employee) {
    const data = employee.cells[column].innerHTML;

    if (data[0] === '$') {
      return +data.split(',').join('').slice(1);
    }

    return data;
  }

  const sortedArr = [...employeeList].sort((employee1, employee2) => {
    const data1 = getData(employee1);
    const data2 = getData(employee2);

    if (Number(data1)) {
      return data1 - data2;
    }

    return data1.localeCompare(data2);
  });

  tbody.append(...sortedArr);
}

thead.addEventListener('click', sortList);
