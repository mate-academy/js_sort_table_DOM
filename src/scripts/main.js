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
    case 'Position':
      sortedList = sortStrings(
        listOfEmpoyees,
        numberOfClickedHeaderElement
      );
      break;
    case 'Age':
      sortedList = sortNumbers(listOfEmpoyees, numberOfClickedHeaderElement);
      break;
    case 'Salary':
      sortedList = sortByCurrency(listOfEmpoyees, numberOfClickedHeaderElement);
      break;
  }

  tableBody.append(...sortedList);
});

function sortStrings(list, numberOfElement) {
  const sortByText = numberOfElement;

  return [...list].sort((prev, next) =>
    prev.cells[sortByText].innerText
      .localeCompare(next.cells[sortByText].innerText)
  );
}

function sortNumbers(list, numberOfElement) {
  return [...list].sort((prev, next) => {
    return parseInt(prev.cells[numberOfElement].innerText)
    - parseInt(next.cells[numberOfElement].innerText);
  });
}

function sortByCurrency(list, numberOfElement) {
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
