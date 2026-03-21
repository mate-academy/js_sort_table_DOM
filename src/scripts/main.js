'use strict';

const table = document.querySelector('table'); // шукаю елемет
let indColuns = 0;

function compareFn(a, b) {
  const valA = a.cells[indColuns].textContent;
  const valB = b.cells[indColuns].textContent;

  const newA = Number(valA.replace(/[$,]/g, ''));
  const newB = Number(valB.replace(/[$,]/g, ''));

  if (!isNaN(newA) && !isNaN(newB)) {
    return newA - newB;
  } else {
    return valA.localeCompare(valB);
  }
}

// вішаю на нього слухача
table.addEventListener('click', (e) => {
  // теги мають бути в верїньому регістрі 'TH'!
  if (e.target.tagName === 'TH') {
    // отримую масив відповідних рядків table.tBodies[0].rows
    const aim = Array.from(table.tBodies[0].rows);

    indColuns = e.target.cellIndex;
    aim.sort(compareFn);
    table.tBodies[0].append(...aim);
  }
});
