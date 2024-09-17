'use strict';

const theadList = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tbodyRows = [...tbody.querySelectorAll('tr')];

theadList.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  tbodyRows.sort((a, b) => {
    const aContent = a.cells[index].textContent;
    const bContent = b.cells[index].textContent;

    switch (index) {
      case 0:
      case 1:
        return aContent.localeCompare(bContent);
      case 2:
        return aContent - bContent;
      case 3:
        const toNumber = (item) =>
          item.slice(1).split(',').join('');

        return toNumber(aContent) - toNumber(bContent);
      default:
    }
  });
  tbodyRows.forEach(item => tbody.append(item));
});
