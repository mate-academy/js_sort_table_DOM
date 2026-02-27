'use strict';

const tbody = document.querySelector('tbody');
const ths = document.querySelectorAll('thead th');

function extract(row, i) {
  const text = row.children[i].textContent.trim();
  const num = text.replace(/[^\d.-]/g, '');

  if (num !== '') {
    return Number(num);
  }

  return text.toLowerCase();
}

Array.from(ths).forEach((th, index) => {
  th.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const aVal = extract(a, index);
      const bVal = extract(b, index);

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return aVal - bVal;
      }

      return aVal.localeCompare(bVal);
    });
    rows.forEach((r) => tbody.appendChild(r));
  });
});
