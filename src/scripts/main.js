'use strict';

const table = document.querySelectorAll('table');

table.forEach(tableTH =>
  tableTH.addEventListener('click', () => getSort(event)));

const getSort = (events) => {
  const target = events.target;
  const order = (target.dataset.order = -(target.dataset.order || -1));
  const index = [...target.parentNode.cells].indexOf(target);
  const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
  const comparator = (column, valueOrder) =>
    (a, b) => valueOrder * collator.compare(
      a.children[column].innerHTML,
      b.children[column].innerHTML
    );

  for (const tBody of target.closest('table').tBodies) {
    tBody.append(...[...tBody.rows].sort(comparator(index, order)));
  }

  for (const cell of target.parentNode.cells) {
    cell.classList.toggle('sorted', cell === target);
  };
};
