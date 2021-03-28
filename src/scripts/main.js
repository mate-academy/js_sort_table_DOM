'use strict';

const tableHead = document.querySelector('table thead');
const tableData = document.querySelector('table tbody');
const rows = Array.from(tableData.querySelectorAll('tr'));

tableHead.addEventListener('click', sortFields);

function sortFields(e) {
  const fieldHeading = e.target.closest('th');

  if (!fieldHeading) {
    return;
  }

  const fieldIndex = fieldHeading.cellIndex;

  function takeNumber(str) {
    return +str.replace(/[$,]/g, '');
  }

  const sortedRows = rows.sort((element1, element2) => {
    const result1 = element1.cells[fieldIndex].textContent;
    const result2 = element2.cells[fieldIndex].textContent;

    if (!isNaN(takeNumber(result1))) {
      return takeNumber(result1) - takeNumber(result2);
    } else {
      return result1.localeCompare(result2);
    }
  });

  tableData.append(...sortedRows);
}
