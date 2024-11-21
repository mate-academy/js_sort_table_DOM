'use strict';

const table = document.querySelector('table');

table.tHead.addEventListener('click', (e) => {
  if (e.target.matches('th')) {
    const tBodyRows = [...table.tBodies[0].rows];

    tBodyRows.sort((a, b) => {
      const elFirst = a.children[e.target.cellIndex].innerText;
      const elSecond = b.children[e.target.cellIndex].innerText;

      return (
        +elFirst - +elSecond ||
        +elFirst.replace(/[$,]/g, '') - +elSecond.replace(/[$,]/g, '') ||
        elFirst.localeCompare(elSecond)
      );
    });

    tBodyRows.forEach((element) => {
      table.tBodies[0].append(element);
    });
  }
});
