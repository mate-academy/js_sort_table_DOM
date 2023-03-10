'use strict';

const thead = document.querySelector('thead');
const tH = thead.querySelectorAll('th');

const tbody = document.querySelector('tbody');
const tBodyRows = [...tbody.rows];

function usdNum(str) {
  return Number(str.replace(/\D/g, ''));
}

thead.addEventListener('click', (ev) => {
  const sortByIndex = [...tH].indexOf(ev.target);

  tBodyRows.sort((a, b) => {
    const aIn = a.cells[sortByIndex].innerText;
    const bIn = b.cells[sortByIndex].innerText;

    return usdNum(aIn) - usdNum(bIn) || aIn.localeCompare(bIn);
  });

  tbody.append(...tBodyRows);
});
