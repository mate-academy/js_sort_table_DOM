'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const heading = e.target.closest('th');

  if (!heading) {
    return;
  }

  const tableBody = table.querySelector('tbody');
  const headingIndex = e.target.cellIndex;

  const rowsArray = [...tableBody.rows];

  rowsArray.sort((firstElement, secondElement) => {
    const firstContent = firstElement.cells[headingIndex].textContent;
    const secondContent = secondElement.cells[headingIndex].textContent;

    if (parseInt(firstContent) === +firstContent) {
      return firstContent - secondContent;
    };

    if (isNaN(parseInt(firstContent.slice(1)))) {
      return firstContent.localeCompare(secondContent);
    } else {
      return parseInt(firstContent.slice(1)) - parseInt(secondContent.slice(1));
    }
  });

  for (const element of rowsArray) {
    tableBody.append(element);
  }
});
