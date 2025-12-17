'use strict';

const tableEl = document.querySelector('table');
const headers = tableEl.querySelectorAll('th');
const tbody = tableEl.querySelector('tbody');

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const aText = a.children[index].textContent.trim();
      const bText = b.children[index].textContent.trim();

      const aNum = parseFloat(aText.replace(/[^0-9.-]+/g, ''));
      const bNum = parseFloat(bText.replace(/[^0-9.-]+/g, ''));

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }

      return aText.localeCompare(bText);
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
