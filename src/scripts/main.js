'use strict';

const header = document.querySelector('thead');
const body = document.querySelector('tbody');
const rows = body.querySelectorAll('tr');

const getNum = (str, isSalary) =>
  isSalary ? Number(str.slice(1).split(',').join('')) : Number(str);

header.addEventListener('click', function(e) {
  if (e.target.nodeName !== 'TH') {
    return;
  }

  this.classList.toggle('sorted');

  const i = e.target.cellIndex;
  const headerName = e.target.textContent;
  let sortedRows;

  if (!this.classList.contains('sorted')) {
    if (['Name', 'Position'].includes(headerName)) {
      sortedRows = [...rows].sort((a, b) => {
        const elementA = a.cells[i].textContent;
        const elementB = b.cells[i].textContent;

        return elementA.localeCompare(elementB);
      });
    }

    if (['Age', 'Salary'].includes(headerName)) {
      const isSalary = headerName === 'Salary';

      sortedRows = [...rows].sort(
        (a, b) => {
          const elementA = getNum(a.cells[i].textContent, isSalary);
          const elementB = getNum(b.cells[i].textContent, isSalary);

          return elementA - elementB;
        });
    }
  } else {
    sortedRows = rows;
  }

  body.append(...sortedRows);
});
