'use strict';

const theads = document.querySelectorAll('th');
const tbody = document.querySelector('table tbody');
const trArr = [...tbody.querySelectorAll('tr')];

function sort(i) {
  trArr.sort((a, b) => {
    const A = a.cells[i].textContent.trim();
    const B = b.cells[i].textContent.trim();

    return A.localeCompare(B, undefined, { numeric: true });
  });

  tbody.append(...trArr);
}

theads.forEach((thead, index) => {
  thead.addEventListener('click', () => {
    sort(index);
  });
});
