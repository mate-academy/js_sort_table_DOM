'use strict';

const table = document.getElementsByTagName('table')[0];

function convertToNumber(currencyString) {
  return Number(currencyString.replace('$', '').replace(/,/g, ''));
}

table.addEventListener('click', function (e) {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const tbody = document.querySelector('tbody');

  const rows = Array.from(tbody.getElementsByTagName('tr')).filter(
    (row) => !row.querySelector('th'),
  );

  const i = Array.from(e.target.parentElement.cells).indexOf(e.target);

  const sortedRows = rows.sort((x, y) => {
    if (
      !isNaN(convertToNumber(x.cells[i].textContent)) &&
      !isNaN(convertToNumber(y.cells[i].textContent))
    ) {
      return (
        convertToNumber(x.cells[i].textContent) -
        convertToNumber(y.cells[i].textContent)
      );
    }

    return x.cells[i].textContent.localeCompare(y.cells[i].textContent);
  });

  tbody.innerHTML = '';
  tbody.append(...sortedRows);
});
