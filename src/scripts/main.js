'use strict';

const table = document.querySelector('table');
const headers = [...table.tHead.rows[0].cells];
const body = table.tBodies[0];

headers.forEach((element, index) => {
  element.addEventListener('click', (e) => {
    const rows = [...body.rows];

    const sortedRows = rows.sort((tr1, tr2) => {
      const tr1Text = tr1.cells[index].textContent;
      const tr2Text = tr2.cells[index].textContent;

      switch (index) {
        case 0:
        case 1:
          return tr1Text.localeCompare(tr2Text);
        case 2:
        case 3:
          if (!canConvertToNumber(tr1Text) || !canConvertToNumber(tr2Text)) {
            return 0;
          }

          return (
            parseInt(tr1Text.replace(/[$,]/g, ''), 10) -
            parseInt(tr2Text.replace(/[$,]/g, ''), 10)
          );
      }
    });

    body.innerHTML = '';
    sortedRows.forEach((row) => body.appendChild(row));
  });
});

function canConvertToNumber(str) {
  const cleanedStr = str.replace(/[$,]/g, '');

  return !isNaN(cleanedStr);
}
