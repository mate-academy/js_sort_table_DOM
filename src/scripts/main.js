'use strict';

function sortBy(columns, collection, columnPosition = 0) {
  const sortedArray = [...columns];

  sortedArray.sort((firstElement, secondElement) => {
    let firstElementText = firstElement.children[columnPosition].innerText;

    firstElementText = firstElementText.replaceAll('$', '').replaceAll(',', '');

    let secondElementText = secondElement.children[columnPosition].innerText;

    secondElementText = secondElementText
      .replaceAll('$', '')
      .replaceAll(',', '');

    if (isNaN(Number(firstElementText))) {
      return firstElementText.localeCompare(secondElementText);
    }

    return Number(firstElementText) - Number(secondElementText);
  });
  sortedArray.forEach((element) => collection.append(element));
}

const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');
const tableColumns = tableBody.querySelectorAll('tr');

const tableHead = table.querySelector('thead');

tableHead.addEventListener('click', (e) => {
  if (!e.target.closest('th')) {
    return;
  }

  sortBy(tableColumns, tableBody, e.target.cellIndex);
});
