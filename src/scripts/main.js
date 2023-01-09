'use strict';

const table = document.querySelector('tbody');
const headers = document.querySelectorAll('th');
const rows = table.querySelectorAll('tr');

function convertInNum(string) {
  return Number(string.replace(/[$,]/g, ''));
}

[...headers].forEach((header, i) => {
  header.addEventListener('click', () => {
    const sorted = [...rows].sort((a, b) => {
      const el1 = a.children[i].textContent;
      const el2 = b.children[i].textContent;

      if (!isNaN(convertInNum(el1))) {
        return convertInNum(el1) - convertInNum(el2);
      } else {
        return el1.localeCompare(el2);
      }
    });

    table.append(...sorted);
  });
});
