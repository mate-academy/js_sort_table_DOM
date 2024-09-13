'use strict';

// write code here

const pageTable = document.querySelector('table');

function extractAmount(str) {
  return parseFloat(str.replace(/[^0-9.]/g, ''));
}

function sortTable(table) {
  table.addEventListener('click', (e) => {
    const th = e.target.closest('th');

    if (th) {
      const tbody = table.querySelector('tbody');
      const rows = [...tbody.querySelectorAll('tr')];

      const sortedRows = rows.sort((rowA, rowB) => {
        const a = rowA.children[th.cellIndex].textContent;
        const b = rowB.children[th.cellIndex].textContent;

        if (
          '$€£¥CHF₹₽₩R₺RM฿Rp₱ر.سد.إ₪E£₫₦₨৳'.includes(a[0]) &&
          '0123456789'.includes(a[1])
        ) {
          return extractAmount(a) - extractAmount(b);
        }

        return a.localeCompare(b);
      });

      tbody.append(...sortedRows);
    }
  });
}

sortTable(pageTable);
