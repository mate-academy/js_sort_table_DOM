'use strict';

const table = document.querySelector('table');
const thead = table.tHead;
const tbody = table.tBodies[0];

thead.addEventListener('click', (e) => {
  const headers = [...thead.querySelectorAll('tr th')];

  headers.forEach((header, index) => {
    if (e.target === header) {
      const sortedList = [...tbody.rows].sort((item1, item2) => {
        if (
          item1.cells[index].innerText.toUpperCase() ===
          item1.cells[index].innerText.toLowerCase()
        ) {
          return (
            normalizeStr(item1.cells[index].innerText) -
            normalizeStr(item2.cells[index].innerText)
          );
        } else {
          return item1.cells[index].innerText.localeCompare(
            item2.cells[index].innerText,
          );
        }
      });

      sortedList.forEach((item) => tbody.append(item));
    }
  });
});

function normalizeStr(item) {
  return item.trim().replaceAll('$', '').replaceAll(',', '');
}
