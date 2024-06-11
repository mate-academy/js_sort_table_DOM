'use strict';

const titles = Array.from(document.querySelectorAll('th'));
const tableRows = Array.from(document.querySelectorAll('tbody tr'));

titles.forEach((title, index) => {
  title.addEventListener('click', () => {
    tableRows.sort((a, b) => {
      const aValue = a.cells[index].textContent.trim();
      const bValue = b.cells[index].textContent.trim();

      const aNum = parseFloat(aValue.replace(/[^0-9.-]+/g, ''));
      const bNum = parseFloat(bValue.replace(/[^0-9.-]+/g, ''));

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      } else {
        return aValue.localeCompare(bValue);
      }
    });

    const tbody = document.querySelector('tbody');

    tableRows.forEach((row) => tbody.appendChild(row));
  });
});
