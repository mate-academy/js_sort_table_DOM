'use strict';

const tbody = document.querySelector('tbody');

const tbodyRows = document.querySelectorAll('tbody tr');

const thead = document.querySelector('thead');

thead.addEventListener('click', function (ev) {
  let index;

  if (ev.target.innerHTML === 'Name') {
    index = 0;
  }

  if (ev.target.innerHTML === 'Position') {
    index = 1;
  }

  if (ev.target.innerHTML === 'Age') {
    index = 2;
  }

  if (ev.target.innerHTML === 'Salary') {
    index = 3;
  }

  const arr = [];

  if (index === 2) {
    for (const currentRow of tbodyRows) {
      arr.push(Number(currentRow.cells[index].innerHTML));
    }
  } else if (index === 3) {
    for (const currentRow of tbodyRows) {
      const salary = currentRow.cells[index].innerHTML;
      const unSignedSalary = salary.slice(1);
      const salaryAsNumber = unSignedSalary.split(',').join('');

      arr.push(salaryAsNumber);
    }
  } else {
    for (const currentRow of tbodyRows) {
      arr.push(currentRow.cells[index].innerHTML);
    }
  }

  arr.sort();

  if (index === 2) {
    for (let i = 0; i < arr.length; i++) {
      for (const currentRow of tbodyRows) {
        if (Number(currentRow.cells[index].innerHTML) === arr[i]) {
          tbody.appendChild(currentRow);
        }
      }
    }
  } else if (index === 3) {
    for (let i = 0; i < arr.length; i++) {
      const numCurSlry = arr[i];
      const strSlry = '$' + numCurSlry.slice(0, 3) + ',' + numCurSlry.slice(3);

      for (const currentRow of tbodyRows) {
        if (currentRow.cells[index].innerHTML === strSlry) {
          tbody.appendChild(currentRow);
        }
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (const currentRow of tbodyRows) {
        if (currentRow.cells[index].innerHTML === arr[i]) {
          tbody.appendChild(currentRow);
        }
      }
    }
  }
});
