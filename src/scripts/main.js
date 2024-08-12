'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

document.addEventListener('DOMContentLoaded', createArr);
thead.addEventListener('click', sortable);

function createArr() {
  const arr = Array.from(tbody.querySelectorAll('tr')).map((row) => {
    const cells = row.querySelectorAll('td');

    return {
      name: cells[0].textContent.trim(),
      position: cells[1].textContent.trim(),
      age: parseInt(cells[2].textContent.trim(), 10),
      salary: parseFloat(cells[3].textContent.trim().replace(/[$,]/g, '')),
    };
  });

  return arr;
}

function sortable(e) {
  const headName = getName(e);
  const newArr = createArr();

  sortArray(headName, newArr);

  function getName() {
    e.preventDefault();

    if (e.target.tagName === 'TH') {
      const info = e.target.textContent;

      return info;
    }
  }

  function sortArray(nameForSort, arrForSort) {
    const sortingName = nameForSort.toLowerCase();

    const sortBy = {
      name: 'name',
      position: 'position',
      age: 'age',
      salary: 'salary',
    }[sortingName];

    if (sortBy) {
      arrForSort.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }

        if (a[sortBy] > b[sortBy]) {
          return 1;
        }

        return 0;
      });
    }

    updateTable(arrForSort);
  }

  function updateTable(finalArr) {
    tbody.innerHTML = '';

    for (const worker of finalArr) {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${worker.name}</td>
        <td>${worker.position}</td>
        <td>${worker.age}</td>
        <td>${worker.salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
      `;
      tbody.appendChild(row);
    }
  }
}
