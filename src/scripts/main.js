'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const rows = tbody.querySelectorAll('tr');

function convertToNum(str) {
  let res = '';

  for (const char of str) {
    if (char !== ',' && char !== '$') {
      res += char;
    }

  }
  return res;
}

thead.addEventListener('click', (e) => {
  const check = e.target.cellIndex;

  const sorted = [...rows].sort((prev, next) => {
    const a = convertToNum(prev.cells[check].innerText);
    const b = convertToNum(next.cells[check].innerText);

    return isNaN(a) 
    ? a.localeCompare(b) 
    : a - b;
  })

  tbody.append(...sorted);
});
