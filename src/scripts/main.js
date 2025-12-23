'use strict';

const head = [...document.querySelectorAll('thead th')];
const rows = [...document.querySelectorAll('tbody tr')];
const body = document.querySelector('tbody');

head.forEach((el) => {
  el.addEventListener('click', (e) => {
    const index = head.indexOf(e.currentTarget);

    if (index === 2) {
      rows.sort(
        (a, b) =>
          Number(a.cells[index].textContent) -
          Number(b.cells[index].textContent),
      );
    } else if (index === 3) {
      rows.sort(
        (a, b) =>
          Number(a.cells[index].textContent.replace(/[^0-9.-]+/g, '')) -
          Number(b.cells[index].textContent.replace(/[^0-9.-]+/g, '')),
      );
    } else {
      rows.sort((a, b) => {
        const textA = a.cells[index].textContent;
        const textB = b.cells[index].textContent;

        return textA.localeCompare(textB);
      });
    }
    rows.forEach((row) => body.appendChild(row));
  });
});
