'use strict';

const tHead = document.querySelector('thead');

tHead.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const columnIndex = e.target.cellIndex;
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    rows.sort((a, b) => {
      const textA = a.children[columnIndex].textContent;
      const textB = b.children[columnIndex].textContent;

      switch (columnIndex) {
        case 2:
          return parseInt(textA, 10) - parseInt(textB, 10);
        case 4:
          return parseSalary(textA) - parseSalary(textB);
        default:
          return textA.localeCompare(textB);
      }
    });

    // додавання назад в таблицю вже відсортованого
    const tbody = document.querySelector('tbody');

    tbody.append(...rows);
  }
});

function parseSalary(str) {
  return Number(str.replace(/[$,]/g, ''));
}
