'use strict';

const table = document.querySelector('table');
const thead = table.tHead;
const tbody = table.tBodies[0];

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');
  const index = th.cellIndex;

  if (!th) {
    return;
  }

  const sortedList = [...tbody.rows].sort((item1, item2) => {
    const aRaw = normalizeStr(item1.cells[index].innerText);
    const bRaw = normalizeStr(item2.cells[index].innerText);
    const a = parseFloat(aRaw);
    const b = parseFloat(bRaw);
    const aIsNum = !Number.isNaN(a);
    const bIsNum = !Number.isNaN(b);

    if (aIsNum && bIsNum) {
      return a - b;
    } else {
      return item1.cells[index].innerText.localeCompare(
        item2.cells[index].innerText,
      );
    }
  });

  tbody.append(...sortedList);
});

function normalizeStr(item) {
  return item.trim().replace(/[^0-9.-]+/g, '');
}
