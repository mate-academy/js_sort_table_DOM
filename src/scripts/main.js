'use strict';

document.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'TH') {
    const column = ev.target.cellIndex;
    const tBody = document.querySelector('table tbody');
    const rows = Array.from(tBody.rows);

    rows.sort((a, b) => {
      let fisrt = a.cells[column].textContent.trim();
      let second = b.cells[column].textContent.trim();

      if (column === 3) {
        fisrt = parseFloat(fisrt.replace(/[$,]/g, ''));
        second = parseFloat(second.replace(/[$,]/g, ''));
      }

      if (isNaN(fisrt) || isNaN(second)) {
        return fisrt.localeCompare(second);
      } else {
        return Number(fisrt) - Number(second);
      }
    });

    rows.forEach((row) => tBody.appendChild(row));
  }
});