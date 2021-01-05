'use strict';

const table = document.querySelector('table');
const tBody = document.querySelector('tbody');
const headCells = table.rows[0].children;

table.tHead.addEventListener('click', action => {
  const index = [...headCells].indexOf(action.target);
  const newOrder = [...tBody.children];

  newOrder.sort((a, b) => {
    const contentA = a.children[index].textContent;
    const contentB = b.children[index].textContent;

    if (contentA[0] === '$') {
      const numA = contentA.replace(/\D/g, '');
      const numB = contentB.replace(/\D/g, '');

      return numA - numB;
    }

    if (isNaN(contentA)) {
      return contentA.localeCompare(contentB);
    }

    return +contentA - +contentB;
  });

  tBody.append(...newOrder);
});
