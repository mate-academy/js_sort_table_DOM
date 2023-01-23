'use strict';

const menu = document.querySelector('thead');
const body = document.querySelector('tbody');
const list = body.querySelectorAll('tr');

menu.addEventListener('click', e => {
  const item = e.target.closest('th');
  const index = e.target.cellIndex;

  if (!item || !menu.contains(item)) {
    return;
  }

  const sortedCells = [...list]
    .sort((a, b) => {
      const aText = a.children[index].innerText;
      const bText = b.children[index].innerText;

      switch (index) {
        case 0:
        case 1:
          return aText.localeCompare(bText);

        case 2:
          return +aText - +bText;

        case 3:
          const aNum = +(aText.replace(/\W/g, ''));
          const bNum = +(bText.replace(/\W/g, ''));

          return aNum - bNum;

        default:
          return 0;
      }
    });

  sortedCells.forEach(el => {
    return body.append(el);
  });
});
