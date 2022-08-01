'use strict';

const tBody = document.querySelector('tbody');
const tHead = document.querySelector('thead');

let check;
let sorted;

function removeChars(string) {
  let res = '';

  for (const char of string) {
    if (char !== ',' && char !== '$') {
      res += char;
    }
  }

  return res;
};

tHead.addEventListener('click', (e) => {
  check = e.target.cellIndex;

  sorted = [...tBody.children].sort((prev, next) => {
    // const a = prev.cells[check].innerText.replace(/[$,]/g, '');
    // const b = next.cells[check].innerText.replace(/[$,]/g, '');
    const a = removeChars(prev.cells[check].innerText);
    const b = removeChars(next.cells[check].innerText);

    return isNaN(a)
      ? a.localeCompare(b)
      : a - b;
  });

  tBody.append(...sorted);
});
