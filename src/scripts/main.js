'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tRow = [...tBody.querySelectorAll('tr')];

tHead.addEventListener('click', (e) => {
  const cellIndex = e.target.cellIndex;

  tRow.sort((a, b) => {
    const type = e.target.textContent;
    const aText = a.cells[cellIndex].textContent;
    const bText = b.cells[cellIndex].textContent;

    switch (type) {
      case 'Name':
      case 'Position':
        return aText.localeCompare(bText);

      case 'Age':
        return aText - bText;

      case 'Salary':
        const normalize = (item) => item.slice(1).split(',').join('');

        return normalize(aText) - normalize(bText);
      default:
    }
  });

  tRow.forEach(item => tBody.append(item));
});
