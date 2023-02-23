'use strict';

// write code here
const tableHeadRef = document.querySelector('thead');
const tableBodyRef = document.querySelector('tbody');
const tableHeadRowsRef = [...document.querySelectorAll('thead tr th')];
const tableBodyRowsRef = [...document.querySelectorAll('tbody tr')];

const employeeArray = getEmployees(tableBodyRowsRef);

tableHeadRef.addEventListener('click', (e) => {
  const tableHeadData = e.target;
  const sortBy = tableHeadData.innerHTML.toLowerCase();

  sortList(employeeArray, sortBy);
});

function getEmployees(list) {
  const arrayOfEmployees = [];

  list.forEach((row) => {
    const tableRow = [...row.children];
    const employeeObject = {};

    for (let i = 0; i < tableRow.length; i++) {
      const propertyName = tableHeadRowsRef[i].innerHTML.toLowerCase();
      const propertyValue = tableRow[i].innerHTML;

      employeeObject[propertyName] = propertyValue;
    }

    arrayOfEmployees.push(employeeObject);
  });

  return arrayOfEmployees;
}

function sortList(list, sortBy) {
  const sortedList = [...list];

  sortedList.sort((firstEmployee, secondEmployee) => {
    let firstSortValue = firstEmployee[sortBy];
    let secondSortValue = secondEmployee[sortBy];

    if (sortBy === 'salary') {
      firstSortValue = formatSalary(firstSortValue);
      secondSortValue = formatSalary(secondSortValue);
    }

    if (sortBy === 'name' || sortBy === 'position') {
      return compareAsStrings(firstSortValue, secondSortValue);
    } else {
      return firstSortValue - secondSortValue;
    }
  });

  tableBodyRef.innerHTML = `
     ${sortedList
    .map(
      (element) =>
        `
      <tr>
        <td>${element.name}</td>
        <td>${element.position}</td>
        <td>${element.age}</td>
        <td>${element.salary}</td>
      </tr>`
    )
    .join('')}
      `;

  return sortedList;
}

const compareAsStrings = (a, b) => {
  const firstString = String(a);
  const secondString = String(b);

  if (firstString > secondString) {
    return 1;
  }

  if (firstString === secondString) {
    return 0;
  }

  return -1;
};

function formatSalary(salary) {
  return +salary.replaceAll(',', '').slice(1);
}
