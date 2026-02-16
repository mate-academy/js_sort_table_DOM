'use strict';

// write code here

function sortTable() {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  if (!thead || !tbody) {
    return;
  }

  const parseSalary = (text) => {
    const cleaned = String(text).replace(/[$,]/g, '');
    const n = Number(cleaned);

    return Number.isFinite(n) ? n : 0;
  };

  const getCellValue = (row, index) => {
    const cell = row.children[index];

    return cell ? cell.textContent.trim() : '';
  };

  const compareRowsAsc = (a, b, index) => {
    if (index === 2) {
      const n1 = Number(getCellValue(a, index));
      const n2 = Number(getCellValue(b, index));

      return n1 - n2;
    }

    if (index === 3) {
      const s1 = parseSalary(getCellValue(a, index));
      const s2 = parseSalary(getCellValue(b, index));

      return s1 - s2;
    }

    const t1 = getCellValue(a, index).toLowerCase();
    const t2 = getCellValue(b, index).toLowerCase();

    return t1.localeCompare(t2);
  };

  const sortTbodyByColumnAsc = (index) => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    if (rows.length === 0) {
      return;
    }

    rows.sort((r1, r2) => compareRowsAsc(r1, r2, index));

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.append(row));
  };

  thead.addEventListener('click', (e) => {
    const th = e.target.closest('th');

    if (!th || !thead.contains(th)) {
      return;
    }

    const headers = Array.from(th.parentElement.children);
    const index = headers.indexOf(th);

    if (index < 0) {
      return;
    }

    sortTbodyByColumnAsc(index);
  });
}

sortTable();
