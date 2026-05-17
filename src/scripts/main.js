'use strict';

const tbody = document.querySelector('tbody');
const headers = document.querySelectorAll('th');

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((a, b) => {
      const aVal = a.cells[index].innerText.replace(/[$,]/g, '');
      const bVal = b.cells[index].innerText.replace(/[$,]/g, '');
      const aNum = Number(aVal);
      const bNum = Number(bVal);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }

      return aVal.localeCompare(bVal);
    });

    rows.forEach(row => tbody.appendChild(row));
  });
});
