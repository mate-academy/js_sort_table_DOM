'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const columnIndex = th.cellIndex;
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const aText = a.cells[columnIndex].textContent.trim();
    const bText = b.cells[columnIndex].textContent.trim();

    const aNum = parseFloat(aText.replace(/[^0-9.-]+/g, ''));
    const bNum = parseFloat(bText.replace(/[^0-9.-]+/g, ''));

    if (!isNaN(aNum) && !isNaN(bNum)) {
      return aNum - bNum;
    }

    return aText.localeCompare(bText);
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.appendChild(row));
});
