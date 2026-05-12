'use strict';

const thead = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

thead.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const cellA = a.children[index].textContent.trim();
      const cellB = b.children[index].textContent.trim();

      const parseValue = (val) => {
        const clean = val.replace(/[$,]/g, '');

        return isNaN(clean) ? val : parseFloat(clean);
      };

      const valA = parseValue(cellA);
      const valB = parseValue(cellB);

      let result;

      if (typeof valA === 'number' && typeof valB === 'number') {
        result = valA - valB;
      } else {
        result = valA.localeCompare(valB, 'en', { numeric: true });
      }

      return result;
    });

    tbody.append(...rows);

    thead.forEach((el) => {
      if (el !== header) {
        delete el.dataset.order;
      }
    });
  });
});
