'use strict';

const tableHeadRow = document.querySelector('thead tr');

tableHeadRow.addEventListener('click', (event) => {
  if (event.target.tagName !== 'TH') {
    return;
  }

  const sortBy = event.target.textContent;
  const tableBody = document.querySelector('tbody');
  const tableRows = [...document.querySelectorAll('tbody tr')];

  switch (sortBy) {
    case 'Name':
      tableRows.sort((a, b) => {
        return a.children[0].textContent
          .localeCompare(b.children[0].textContent);
      });
      break;

    case 'Position':
      tableRows.sort((a, b) => {
        return a.children[1].textContent
          .localeCompare(b.children[1].textContent);
      });
      break;

    case 'Age':
      tableRows.sort((a, b) => {
        return Number(a.children[2].textContent)
          - Number(b.children[2].textContent);
      });
      break;

    case 'Salary':
      tableRows.sort((a, b) => {
        return Number(a.children[3].textContent
          .replace('$', '').replace(',', ''))
          - Number(b.children[3].textContent
            .replace('$', '').replace(',', ''));
      });
      break;

    default:

      return;
  }

  tableBody.innerHTML = '';

  tableRows.forEach(tr => {
    tableBody.append(tr);
  });
});
