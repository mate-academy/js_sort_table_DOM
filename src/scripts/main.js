'use strict';

// write code here
const table = document.querySelector('table');
const headers = document.querySelectorAll('thead tr th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});

function sortTable(index) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const sortedRows = rows.sort((a, b) => {
    let aText = a.querySelectorAll('td')[index].textContent.trim();
    let bText = b.querySelectorAll('td')[index].textContent.trim();

    if (index === 2) {
      aText = parseInt(aText, 10);
      bText = parseInt(bText, 10);

      return aText - bText;
    } else if (index === 3) {
      aText = Number(aText.replace(/[$,]/g, ''));
      bText = Number(bText.replace(/[$,]/g, ''));

      return aText - bText;
    }

    return aText > bText ? 1 : -1;
  });

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  tbody.append(...sortedRows);
}
