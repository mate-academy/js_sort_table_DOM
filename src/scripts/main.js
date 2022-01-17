'use strict';

const tBody = document.querySelector('tbody');
const table = document.querySelector('table');
const rows = [...tBody.rows];

table.addEventListener('click', function sortTable(action) {
  const target = action.target.closest('th');

  const sortedList = rows.sort((a, b) => {
    switch (target.textContent) {
      case 'Name':
        const nameA = a.innerText;
        const nameB = b.innerText;

        return nameA.localeCompare(nameB);

      case 'Position':
        const posA = a.innerText
          .split('\t')[1]
          .trim()
          .split(' ')[0];

        const posB = b.innerText
          .split('\t')[1]
          .trim()
          .split(' ')[0];

        return posA.localeCompare(posB);

      case 'Age':
        const ageA = a.innerText.split('\t')[2].trim();
        const ageB = b.innerText.split('\t')[2].trim();

        return ageB - ageA;

      case 'Salary':
        const salaryA = a.innerText.split('\t')[3];
        const salaryB = b.innerText.split('\t')[3];

        const one = salaryA.slice(1).split(',').join('');
        const two = salaryB.slice(1).split(',').join('');

        return +two - +one;
    }
  });

  tBody.append(...sortedList);
});
