'use strict';

const headers = document.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const tbody = document.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const sortRows = rows.sort((a, b) => {
      const aValue = a.querySelectorAll('td')[index].textContent.trim();
      const bValue = b.querySelectorAll('td')[index].textContent.trim();
      const cleanNum = (str) => parseFloat(str.replace(/[^0-9.-]/g, ''));

      if (!isNaN(cleanNum(aValue)) && !isNaN(cleanNum(bValue))) {
        return cleanNum(aValue) - cleanNum(bValue);
      }

      return aValue.localeCompare(bValue);
    });

    tbody.append(...sortRows);
  });
});
