'use strict';

const table = document.querySelector('table');

if (table) {
  const headers = table.querySelector('thead');
  const rows = [...table.querySelector('tbody').querySelectorAll('tr')];

  if (headers && rows) {
    headers.addEventListener('click', (ev) => {
      const key = ev.target.closest('th');

      if (key) {
        const colNumber = [...headers.firstElementChild.children].indexOf(key);

        if (['Salary', 'Age'].includes(key.textContent)) {
          rows.sort(
            (a, b) =>
              parseCellToNumber(a, colNumber) - parseCellToNumber(b, colNumber),
          );
        } else {
          rows.sort((a, b) => {
            return a.children[colNumber].textContent.localeCompare(
              b.children[colNumber].textContent,
            );
          });
        }

        table.querySelector('tbody').replaceChildren(...rows);
      }
    });
  }
}

function parseCellToNumber(row, index) {
  const digits = row.children[index].textContent.match(/\d+/g);

  if (digits && digits.length > 0) {
    return parseInt(digits.join(''));
  }

  return 0;
}
