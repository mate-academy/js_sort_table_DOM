'use strict';

const table = document.querySelector('table');
const tBody = table.tBodies[0];

const rows = Array.from(tBody.querySelectorAll('tr'));

table.addEventListener('click', e => {
  const sortParam = e.target.closest('th').cellIndex;

  const sort = rows.sort((a, b) => {
    const aItem = a.children[sortParam].textContent.trim()
      .replace('$', '').replace(',', '');
    const bItem = b.children[sortParam].textContent.trim()
      .replace('$', '').replace(',', '');

    return +aItem - +bItem || aItem.localeCompare(bItem);
  });

  tBody.append(...sort);
});
