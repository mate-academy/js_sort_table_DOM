'use strict';

const table = document.querySelector('table');
const tBody = table.tBodies[0];

const rows = Array.from(tBody.querySelectorAll('tr'));

const normalizeNumber = value => {
  return +value.replace('$', '').replace(',', '');
};

table.addEventListener('click', e => {
  const param = e.target.closest('th').cellIndex;

  const sort = rows.sort((a, b) => {
    const itemA = a.children[param].textContent.trim();
    const itemB = b.children[param].textContent.trim();

    return normalizeNumber(itemA) - normalizeNumber(itemB)
      || itemA.localeCompare(itemB);
  });

  tBody.append(...sort);
});
