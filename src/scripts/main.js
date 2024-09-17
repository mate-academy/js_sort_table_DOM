'use strict';

const tbody = document.querySelectorAll('tbody');
const th = document.querySelectorAll('thead > tr > th');

th.forEach((el, columnIndex) => {
  el.addEventListener('click', () => {
    tbody.forEach((tbodyEl) => {
      const tr = tbodyEl.querySelectorAll('tr');
      const trArr = Array.from(tr);

      const isNumericColumn = columnIndex === 2 || columnIndex === 3;

      const sortedTr = trArr.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText;
        const bText = b.cells[columnIndex].innerText;

        if (isNumericColumn) {
          const aNum = aText.replace(/[^0-9.-]+/g, '');
          const bNum = bText.replace(/[^0-9.-]+/g, '');

          return parseFloat(aNum) - parseFloat(bNum);
        } else {
          return aText.localeCompare(bText);
        }
      });

      tbodyEl.innerHTML = '';
      sortedTr.forEach((row) => tbodyEl.appendChild(row));
    });
  });
});
