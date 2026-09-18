'use strict';

const th = document.querySelectorAll('th');

th.forEach((header) => {
  header.addEventListener('click', () => {
    document.querySelectorAll('th span').forEach((span) => {
      span.remove();
    });

    const index = Array.from(document.querySelectorAll('th')).indexOf(header);

    const rows = document.querySelectorAll('tbody tr');

    const rowsArray = Array.from(rows);

    const numberColumns = [2, 3];

    rowsArray.sort((a, b) => {
      const cellA = a.querySelectorAll('td')[index];
      const cellB = b.querySelectorAll('td')[index];

      if (numberColumns.includes(index)) {
        const valueA = Number(
          cellA.textContent.replace('$', '').replace(',', ''),
        );

        const valueB = Number(
          cellB.textContent.replace('$', '').replace(',', ''),
        );

        return valueA - valueB;
      } else {
        return cellA.textContent.localeCompare(cellB.textContent);
      }
    });

    const tbody = document.querySelector('tbody');

    rowsArray.forEach((row) => {
      tbody.append(row);
    });
  });
});
