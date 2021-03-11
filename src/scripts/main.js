'use strict';

const listOfEmpoyees = document.querySelectorAll('tbody > tr');
const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHeader.addEventListener('click', (eventClick) => {
  const clickedByUserCategory = eventClick.target.closest('th');

  let sortedList;

  const numberOfClickedHeaderElement = [...tableHeader.rows[0].cells]
    .indexOf(clickedByUserCategory);

  switch (clickedByUserCategory.innerText) {
    case 'Name':
      sortedList = sortByNameOrPosition(
        listOfEmpoyees,
        numberOfClickedHeaderElement
      );
      break;
    case 'Position':
      sortedList = sortByNameOrPosition(
        listOfEmpoyees,
        numberOfClickedHeaderElement
      );
      break;
    case 'Age':
      sortedList = sortByAge(listOfEmpoyees, numberOfClickedHeaderElement);
      break;
    case 'Salary':
      sortedList = sortBySalary(listOfEmpoyees, numberOfClickedHeaderElement);
      break;
  }

  sortedList.forEach((row) =>
    tableBody.append(row));
});

function sortByNameOrPosition(list, numberOfElement) {
  const sortByText = numberOfElement;

  return [...list].sort((prev, next) =>
    prev.cells[sortByText].innerText
      .localeCompare(next.cells[sortByText].innerText)
  );
}

function sortByAge(list, numberOfElement) {
  return [...list].sort((prev, next) => {
    return parseInt(prev.cells[numberOfElement].innerText)
    - parseInt(next.cells[numberOfElement].innerText);
  });
}

function sortBySalary(list, numberOfElement) {
  return [...list].sort((prev, next) => {
    return convertToMoney(prev.cells[numberOfElement].innerText)
    - convertToMoney(next.cells[numberOfElement].innerText);
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
