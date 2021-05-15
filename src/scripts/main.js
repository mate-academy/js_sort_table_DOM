'use strict';

const head = document.querySelector('thead');

head.addEventListener('click', (push) => {
  const th = push.target;

  sortHead(th.cellIndex, push.target.textContent);
});

function sortHead(numCol, nameCol) {
  const bodyTable = document.querySelector('tbody');

  const sorted = [...bodyTable.rows];

  sorted.sort((a, b) => {
    if (nameCol === 'Salary') {
      return conv(a.cells[numCol].innerHTML) - conv(b.cells[numCol].innerHTML);
    };

    return a.cells[numCol].innerHTML > b.cells[numCol].innerHTML ? 1 : -1;
  });

  bodyTable.append(...sorted);
};

function conv(item) {
  return +(item.replace(/\D/g, ''));
};
