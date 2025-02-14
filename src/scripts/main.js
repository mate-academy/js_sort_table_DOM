'use strict';

// write code here
const sortProps = document.querySelectorAll('thead th');

sortProps.forEach((sortProp) => {
  sortProp.addEventListener('click', () => {
    const table = sortProp.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const aText = a.querySelector(
        `td:nth-child(${sortProp.cellIndex + 1})`,
      ).textContent;
      const bText = b.querySelector(
        `td:nth-child(${sortProp.cellIndex + 1})`,
      ).textContent;

      if (!isNaN(+aText.slice(1).split(',').join(''))) {
        let compare1 = +aText;
        let compare2 = +bText;

        if (aText[0] === '$') {
          compare1 = +aText.slice(1).split(',').join('');
          compare2 = +bText.slice(1).split(',').join('');
        }

        return compare1 - compare2;
      }

      return aText.localeCompare(bText);
    });

    tbody.innerHTML = '';

    rows.forEach((row) => {
      tbody.appendChild(row);
    });
  });
});
