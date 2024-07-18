'use strict';

const theads = document.querySelectorAll('th');
const tbody = document.querySelector('table tbody');
const trArray = [...tbody.querySelectorAll('tr')];

function sorting(index) {
  trArray.sort((a, b) => {
    const trA = a.cells[index].textContent;
    const trB = b.cells[index].textContent;

    return trA.localeCompare(trB, undefined, { numeric: true });
  });

  tbody.innerHTML = '';
  trArray.forEach((tr) => tbody.append(tr));
}

theads.forEach((th, ind) => {
  th.addEventListener('click', () => {
    sorting(ind);
  });
});
