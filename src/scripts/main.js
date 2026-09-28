'use strict';

const headers = document.querySelectorAll('thead th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = document.querySelectorAll('tbody tr');
    const sortedRows = [...rows];

    sortedRows.sort((rowA, rowB) => {
      const aText = rowA.children[index].textContent;
      const bText = rowB.children[index].textContent;

      if (index === 2 || index === 3) {
        const aNumber = Number(aText.replace('$', '').replace(',', ''));
        const bNumber = Number(bText.replace('$', '').replace(',', ''));

        return aNumber - bNumber;
      }

      return aText.localeCompare(bText);
    });

    const tbody = document.querySelector('tbody');

    tbody.append(...sortedRows);
  });
});
