'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (sortBy) => {
  const bodyTable = table.tBodies[0];
  const bodyTableArr = [...bodyTable.rows];
  const th = sortBy.target.closest('th').textContent.trim();

  if (!th) {
    return;
  }

  switch (th) {
    case 'Name': {
      bodyTableArr.sort((a, b) => {
        const nameA = a.cells[0].textContent.trim();
        const nameB = b.cells[0].textContent.trim();

        return nameA.localeCompare(nameB);
      });

      bodyTableArr.forEach((row) => bodyTable.appendChild(row));

      break;
    }

    case 'Position': {
      bodyTableArr.sort((a, b) => {
        const positionA = a.cells[1].textContent.trim();
        const positionB = b.cells[1].textContent.trim();

        return positionA.localeCompare(positionB);
      });

      bodyTableArr.forEach((row) => bodyTable.appendChild(row));

      break;
    }

    case 'Age': {
      bodyTableArr.sort((a, b) => {
        const ageA = a.cells[2].textContent.trim();
        const ageB = b.cells[2].textContent.trim();

        return ageA - ageB;
      });

      bodyTableArr.forEach((row) => bodyTable.appendChild(row));

      break;
    }

    case 'Salary': {
      bodyTableArr.sort((a, b) => {
        let salaryA = a.cells[3].textContent.trim();
        let salaryB = b.cells[3].textContent.trim();

        salaryA = salaryA
          .split('')
          .filter((num) => !isNaN(parseInt(num)))
          .join('');

        salaryB = salaryB
          .split('')
          .filter((num) => !isNaN(parseInt(num)))
          .join('');

        return salaryA - salaryB;
      });

      bodyTableArr.forEach((row) => bodyTable.appendChild(row));

      break;
    }
  }
});
