'use strict';

const tbody = document.querySelector('tbody');
const headers = document.querySelectorAll('th');

headers.forEach((header) => {
  header.addEventListener('click', (e) => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const aText = a.children[e.target.cellIndex].textContent
        .trim()
        .replace(/[$,]/g, '');
      const bText = b.children[e.target.cellIndex].textContent
        .trim()
        .replace(/[$,]/g, '');

      const aNum = Number(aText);
      const bNum = Number(bText);

      if (isNaN(aNum) || isNaN(bNum)) {
        return aText.localeCompare(bText);
      } else {
        return aNum - bNum;
      }
    });
    rows.forEach((row) => tbody.appendChild(row));
  });
});
