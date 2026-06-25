'use strict';

const headers = document.querySelectorAll('th');

headers.forEach((header) => {
  header.addEventListener('click', (evt) => {
    const tbody = document.querySelector('tbody');
    const columnNumber = evt.target.cellIndex;
    const data = Array.from(tbody.rows);

    data.sort((a, b) => {
      const aValue = a.cells[columnNumber].innerText;
      const bValue = b.cells[columnNumber].innerText;
      const cleanNumber = (str) => +str.replace(/[$,]/g, '');

      const aNum = cleanNumber(aValue);
      const bNum = cleanNumber(bValue);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }

      return aValue.localeCompare(bValue);
    });

    tbody.append(...data);
  });
});
