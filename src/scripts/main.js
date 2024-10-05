'use strict';

const head = document.querySelector('thead');
const holeList = document.querySelector('tbody');
const rows = Array.from(holeList.rows);

head.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  rows.sort((a, b) => {
    const aText = a.cells[index].textContent;
    const bText = b.cells[index].textContent;

    if (index === 0 || index === 1) {
      return aText.localeCompare(bText);
    } else if (index === 2 || index === 3) {
      return convertToNumber(aText) - convertToNumber(bText);
    }
  });

  holeList.append(...rows);
});

function convertToNumber(salaryString) {
  if (salaryString.startsWith('$')) {
    return parseInt(salaryString.replace(/[$,]/g, ''));
  } else {
    return +salaryString;
  }
}
