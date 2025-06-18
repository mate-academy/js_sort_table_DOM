'use strict';

const headers = document.querySelectorAll('thead th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const tbody = document.querySelector('tbody');
    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    rowsArray.sort((a, b) => {
      const aText = a.children[index].textContent;
      const bText = b.children[index].textContent;

      const aNum = parseFloat(aText.replace(/[^0-9.-]+/g, ''));
      const bNum = parseFloat(bText.replace(/[^0-9.-]+/g, ''));

      const bothAreNumbers = !isNaN(aNum) && !isNaN(bNum);

      return bothAreNumbers ? aNum - bNum : aText.localeCompare(bText);
    });

    tbody.innerHTML = '';
    rowsArray.forEach((row) => tbody.appendChild(row));
  });
});
