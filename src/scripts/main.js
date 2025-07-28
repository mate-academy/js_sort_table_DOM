'use strict';

// write code here

const table = document.getElementsByTagName('table')[0];

function convertToNumber(currencyString) {
  return Number(currencyString.replace(/\$/g, '').replace(/,/g, ''));
}

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const index = Array.from(e.target.parentElement.cells).indexOf(e.target);

  const sortedRows = rows.sort((x, y) => {
    if (
      !isNaN(convertToNumber(x.cells[index].textContent)) &&
      !isNaN(convertToNumber(y.cells[index].textContent))
    ) {
      return (
        convertToNumber(x.cells[index].textContent) -
        convertToNumber(y.cells[index].textContent)
      );
    }

    return x.cells[index].textContent.localeCompare(y.cells[index].textContent);
  });

  tbody.innerHTML = '';
  tbody.append(...sortedRows);
});
