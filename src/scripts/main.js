'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('table');

  const tbody = table.querySelector('tbody');

  const rows = Array.from(tbody.querySelectorAll('tr'));

  table.querySelectorAll('th').forEach((header, index) => {
    header.addEventListener('click', () => {
      rows.sort((a, b) => {
        const aValue = a.children[index].textContent.trim();
        const bValue = b.children[index].textContent.trim();

        const aNum = isNaN(aValue)
          ? aValue : parseFloat(aValue.replace(/[^0-9.-]+/g, ''));
        const bNum = isNaN(bValue)
          ? bValue : parseFloat(bValue.replace(/[^0-9.-]+/g, ''));

        if (aNum < bNum) {
          return -1;
        }

        if (aNum > bNum) {
          return 1;
        }

        return 0;
      });

      rows.forEach(row => tbody.removeChild(row));

      rows.forEach(row => tbody.appendChild(row));
    });
  });
});
