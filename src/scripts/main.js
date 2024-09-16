'use strict';

const tbody = document.querySelector('tbody');
const headers = document.querySelector('thead');
const rows = [...tbody.querySelectorAll('tr')];

headers.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  rows.sort((a, b) => {
    const aContent = a.cells[index].innerText;
    const bContent = b.cells[index].innerText;

    switch (index) {
      case 0:
      case 1:
        return aContent.localeCompare(bContent);

      case 2:
        return aContent - bContent;

      case 3:
        const toNum = item =>
          item.slice(1).split(',').join('');

        return toNum(aContent) - toNum(bContent);

      default:
    }
  });

  rows.forEach(item => {
    tbody.append(item);
  });
});
