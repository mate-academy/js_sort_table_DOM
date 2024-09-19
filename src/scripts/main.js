'use strict';

// write code here
const bnts = Array.from(document.querySelector('table').rows[0].cells);
const tBody = Array.from(document.querySelector('table').rows).filter(
  (el, id, arr) => id !== 0 && id !== arr.length - 1,
);

function SortBy(id) {
  if (
    !isNaN(tBody[0].cells[id].innerText) ||
    tBody[0].cells[id].innerText.includes('$')
  ) {
    tBody.sort(
      (a, b) =>
        parseFloat(a.cells[id].innerText.replace('$', '')) -
        parseFloat(b.cells[id].innerText.replace('$', '')),
    );
    tBody.forEach((row) => document.querySelector('table').appendChild(row));
  } else {
    tBody.sort((a, b) =>
      // eslint-disable-next-line prettier/prettier
      a.cells[id].innerText.localeCompare(b.cells[id].innerText));
    tBody.forEach((row) => document.querySelector('table').appendChild(row));
  }
}

bnts.forEach((el, i) => {
  el.addEventListener('click', (e) => {
    SortBy(i);
  });
});
