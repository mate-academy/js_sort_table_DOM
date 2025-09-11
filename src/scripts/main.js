'use strict';

const table = document.querySelector('table');
const thead = table.tHead;
const tbody = table.tBodies[0];
const headers = [...thead.querySelectorAll('tr th')];

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');
  const index = headers.indexOf(th);

  const sortedList = [...tbody.rows].sort((item1, item2) => {
    if (
      !isNaN(normalizeStr(item1.cells[index].innerText)) &&
      !isNaN(normalizeStr(item2.cells[index].innerText))
    ) {
      return (
        Number(normalizeStr(item1.cells[index].innerText)) -
        Number(normalizeStr(item2.cells[index].innerText))
      );
    } else {
      return item1.cells[index].innerText.localeCompare(
        item2.cells[index].innerText,
      );
    }
  });

  tbody.append(...sortedList);
});

function normalizeStr(item) {
  return item.trim().replace(/[,$]/g, '');
}
