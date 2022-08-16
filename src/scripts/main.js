'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tableRows = [...tBody.children];
const tableHeads = [...document.querySelectorAll('th')];

tHead.addEventListener('click', e => {
  const indexOfColumn = tableHeads.indexOf(e.target);

  tableRows.sort((a, b) =>

    (['Age', 'Salary'].includes(e.target.innerText))

      ? (a.children[indexOfColumn].innerText.replace(/[^+\d]/g, '')
        - b.children[indexOfColumn].innerText.replace(/[^+\d]/g, ''))

      : (a.children[indexOfColumn].innerText
        .localeCompare(b.children[indexOfColumn].innerText))
  );

  tableRows.forEach(row => tBody.append(row));
});
