'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const arr = [...tHead.querySelectorAll('th')];

tHead.querySelectorAll('th').forEach((th) => {
  th.addEventListener('click', () => {
    const rows = Array.from(tBody.querySelectorAll('tr'));
    const indexRow = arr.indexOf(th);

    if (th.textContent === 'Salary' || th.textContent === 'Age') {
      rows.sort((rowA, rowB) => {
        const salaryA = parseInt(
          rowA.children[indexRow].textContent.replace(/[^0-9]/g, ''),
        );
        const salaryB = parseInt(
          rowB.children[indexRow].textContent.replace(/[^0-9]/g, ''),
        );

        return salaryA - salaryB;
      });
    } else {
      rows.sort((rowA, rowB) => {
        const sortA = rowA.children[indexRow].textContent.trim();
        const sortB = rowB.children[indexRow].textContent.trim();

        return sortA.localeCompare(sortB);
      });
    }

    rows.forEach((row) => tBody.appendChild(row));
  });
});
