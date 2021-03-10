'use strict';

const listOfEmpoyees = document.querySelectorAll('tbody > tr');
const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHeader.addEventListener('click', (eventClick) => {
  const clickedByUserCategory = eventClick.target.closest('th');
  let sortedList;

  switch (clickedByUserCategory.innerText) {
    case 'Name':
      sortedList = sortByNameOrPosition(listOfEmpoyees, 'name'); break;
    case 'Position':
      sortedList = sortByNameOrPosition(listOfEmpoyees, 'position'); break;
    case 'Age':
      sortedList = sortByAge(listOfEmpoyees); break;
    case 'Salary':
      sortedList = sortBySalary(listOfEmpoyees); break;
  }

  sortedList.forEach((row) =>
    tableBody.append(row));
});

function sortByNameOrPosition(list, sortBy) {
  const sortByText = (sortBy === 'name') ? 0 : 1;

  return [...list].sort((a, b) =>
    a.cells[sortByText].innerText.localeCompare(b.cells[sortByText].innerText)
  );
}

function sortByAge(list) {
  return [...list].sort((a, b) => {
    return parseInt(a.cells[2].innerText)
    - parseInt(b.cells[2].innerText);
  });
}

function sortBySalary(list) {
  return [...list].sort((a, b) => {
    return convertToMoney(a.cells[3].innerText)
    - convertToMoney(b.cells[3].innerText);
  });
}

function convertToMoney(str) {
  let sum = str;

  while (sum.indexOf(',') > -1) {
    sum = sum.replace(',', '');
  }

  while (sum.indexOf('$') > -1) {
    sum = sum.replace('$', '');
  }

  return parseInt(sum);
}
