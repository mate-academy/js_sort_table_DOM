'use strict';

const menu = document.querySelector('thead');
const body = document.querySelector('tbody');
const list = body.querySelectorAll('tr');

menu.addEventListener('click', e => {
  const item = e.target.closest('th');
  const index = e.target.cellIndex;
  const label = e.target.innerText;

  if (!item || !menu.contains(item)) {
    return;
  }

  const sortedCells = [...list]
    .sort((a, b) => {
      const aText = a.children[index].innerText;
      const bText = b.children[index].innerText;

      switch (label) {
        case 'Name':
          return aText.localeCompare(bText);

        case 'Position':
          return +aText - +bText;

        case 'Age':
        case 'Salary':
          const aNum = +(aText.replace(/\W/g, ''));
          const bNum = +(bText.replace(/\W/g, ''));

          return aNum - bNum;

        default:
          break;
      }
    });

  sortedCells.forEach(el => body.append(el));
});
