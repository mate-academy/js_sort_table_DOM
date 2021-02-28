'use strict';

const table = document.querySelectorAll('table tbody tr');
const tbody = document.querySelector('table tbody');
const thead = document.querySelectorAll('table thead th');
const rows = [...table];

const convert = (string) => {
  return Number(string.replace(/[$,]/g, ''));
};

thead.forEach((title, i) => title.addEventListener('click', () => {
  const sorted = rows.sort(
    (a, b) => {
      return convert(rows[0].cells[i].innerText) > 0
        ? convert(a.cells[i].innerText) - convert(b.cells[i].innerText)
        : a.cells[i].innerText.localeCompare(b.cells[i].innerText);
    });

  tbody.append(...sorted);
}));
