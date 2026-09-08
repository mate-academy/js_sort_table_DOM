'use strict';

const cleanSalary = (salaryString) => {
  return Number(salaryString.replaceAll('$', '').replaceAll(',', ''));
};

const tableBody = document.querySelector('tbody');
const tableHead = document.querySelector('thead');
const headers = Array.from(tableHead.rows[0].cells);
const allRows = Array.from(tableBody.rows);

tableHead.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = headers.indexOf(e.target);

  allRows.sort((row1, row2) => {
    const firstRowContent = row1.cells[index].textContent;
    const secondRowContent = row2.cells[index].textContent;

    if (index === 3) {
      const number1 = cleanSalary(firstRowContent);
      const number2 = cleanSalary(secondRowContent);

      return number1 - number2;
    }

    if (index === 2) {
      return Number(firstRowContent) - Number(secondRowContent);
    }

    return firstRowContent.localeCompare(secondRowContent);
  });

  for (const row of allRows) {
    tableBody.append(row);
  }
});
