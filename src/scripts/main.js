'use strict';

const headers = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sorted = rows.sort((a, b) => {
      const aRaw = a.children[index].textContent.trim();
      const bRaw = b.children[index].textContent.trim();

      const aValue = aRaw.replace(/[^0-9.-]/g, '');
      const bValue = bRaw.replace(/[^0-9.-]/g, '');

      if (aValue && bValue && !isNaN(aValue) && !isNaN(bValue)) {
        return Number(aValue) - Number(bValue);
      }

      return aRaw.localeCompare(bRaw);
    });

    tbody.append(...sorted);
  });
});
