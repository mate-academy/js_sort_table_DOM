'use strict';

const table = document.querySelector('table');
const tBody = table.tBodies[0];

const rows = Array.from(tBody.querySelectorAll('tr'));

const normalizeNumber = value => {
  return +value.replace('$', '').replace(',', '');
};

table.addEventListener('click', e => {
  const sortParam = e.target.closest('th').cellIndex;

  const sort = rows.sort((a, b) => {
    const aItem = a.children[sortParam].textContent.trim();
    const bItem = b.children[sortParam].textContent.trim();

    return normalizeNumber(aItem) - normalizeNumber(bItem)
      || aItem.localeCompare(bItem);
  });

  tBody.append(...sort);
});
