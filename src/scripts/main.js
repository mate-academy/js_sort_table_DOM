/* eslint-disable function-paren-newline */
'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelectorAll('thead th');
  const table = document.querySelector('tbody');

  header.forEach((element) =>
    element.addEventListener('click', () => {
      const headerName = element.textContent.trim();
      const tableRows = Array.from(table.querySelectorAll('tr'));
      const columnNumber = Array.from(header).indexOf(element);

      function sortList(list) {
        let sortedList = [];

        switch (headerName) {
          case 'Name':
          case 'Position':
            sortedList = list.sort((a, b) =>
              a.cells[columnNumber].textContent
                .trim()
                .localeCompare(b.cells[columnNumber].textContent.trim()),
            );
            break;

          case 'Salary':
            sortedList = list.sort(
              (a, b) =>
                parseFloat(
                  a.cells[columnNumber].textContent
                    .slice(1)
                    .split(',')
                    .join(''),
                ) -
                parseFloat(
                  b.cells[columnNumber].textContent
                    .slice(1)
                    .split(',')
                    .join(''),
                ),
            );
            break;

          case 'Age':
            sortedList = list.sort(
              (a, b) =>
                parseInt(a.cells[columnNumber].textContent) -
                parseInt(b.cells[columnNumber].textContent),
            );
            break;

          default:
            return;
        }

        table.innerHTML = '';
        sortedList.forEach((employee) => table.appendChild(employee));
      }

      sortList(tableRows);
    }),
  );
});
