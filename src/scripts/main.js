'use strict';

document.querySelectorAll('thead th').forEach((itemSortBy, itemSortByIndex) => {
  itemSortBy.addEventListener('click', (e) => {
    const tableBody = document.querySelector('table tbody');
    const rows = [...tableBody.rows];

    rows.sort((row1, row2) => {
      const value1 = row1.cells[itemSortByIndex].textContent.trim();
      const value2 = row2.cells[itemSortByIndex].textContent.trim();

      switch (itemSortBy.textContent) {
        case 'Name':
          return value1.localeCompare(value2);

        case 'Position':
          return value1.localeCompare(value2);

        case 'Age':
          return value1 - value2;

        case 'Salary':
          return (
            parseFloat(value1.replace(/[$,]/g, '')) -
            parseFloat(value2.replace(/[$,]/g, ''))
          );

        default:
          return 0;
      }
    });

    rows.forEach((row) => tableBody.appendChild(row));
  });
});

/* if (
  !isNaN(val1.replace(/[$,]/g, '')) &&
  !isNaN(val2.replace(/[$,]/g, ''))) {
  val1 = parseFloat(val1.replace(/[$,]/g, ''));
  val2 = parseFloat(val2.replace(/[$,]/g, ''));

  return val1 - val2;
}

return val1.localeCompare(val2); */
