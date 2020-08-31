'use strict';

const table = document.querySelector('table');

function tableSorter(index, elem) {
  const result = [...table.tBodies[0].rows].sort((a, b) => {
    let x = a.cells[index].textContent;
    let y = b.cells[index].textContent;

    if (elem === 'Salary') {
      x = x.replace(/[$,]/g, '');
      y = y.replace(/[$,]/g, '');
    }

    if (isNaN(+x)) {
      return x.localeCompare(y);
    } else {
      return (+x) - (+y);
    };
  });

  table.tBodies[0].append(...result);
}

table.addEventListener('click', (event) => {
  tableSorter(event.target.cellIndex, event.target.textContent);
});
