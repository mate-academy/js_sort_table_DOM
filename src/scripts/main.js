'use strict';

const tableBody = document.querySelector('tbody');
const titles = document.querySelectorAll('th');
const rows = Array.from(document.querySelectorAll('tr'));

titles.forEach((title, index) => {
  title.addEventListener('click', () => {
    rows.sort((a, b) => {
      const textA = a.children[index].textContent.trim();
      const textB = b.children[index].textContent.trim();

      const valueA = parseFloat(textA.replace(/[$,]/g, ''));
      const valueB = parseFloat(textB.replace(/[$,]/g, ''));

      const isANumber = !isNaN(valueA);
      const isBNumber = !isNaN(valueB);

      if (isANumber && isBNumber) {
        return valueA - valueB;
      } else {
        return textA.localeCompare(textB);
      }
    });
    tableBody.innerHTML = '';

    rows.forEach((row) => {
      tableBody.appendChild(row);
    });
  });
});
