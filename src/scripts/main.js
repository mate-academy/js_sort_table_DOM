'use strict';

// write code here

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const numericCols = [2, 3];

thead.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;
  const colIndex = Array.from(th.parentElement.children).indexOf(th);
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const sortedRows = rows.sort((a, b) => {
    const aText = a.cells[colIndex].textContent.trim();
    const bText = b.cells[colIndex].textContent.trim();

    if (numericCols.includes(colIndex)) {
      const aNum = parseFloat(aText.replace(/[^0-9.]/g, ''));
      const bNum = parseFloat(bText.replace(/[^0-9.]/g, ''));

      return aNum - bNum;
    }

    return aText.localeCompare(bText);
  });

  tbody.innerHTML = '';
  sortedRows.forEach((row) => tbody.appendChild(row));
});
