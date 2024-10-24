'use strict';

// write code here
const heads = Array.from(document.querySelector('tr').children).map((th) => {
  return th.textContent;
});

const tr = document.querySelectorAll('tr');

const tables = [];

for (let i = 1; i < tr.length; i++) {
  const cells = tr[i].children;
  const table = {};

  for (let j = 0; j < heads.length; j++) {
    table[heads[j]] = cells[j]?.textContent || '';
  }

  tables.push(table);
}

tables.pop();

const thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
  const header = e.target.closest('th');
  let sortedTables = [];

  if (header.textContent === heads[0]) {
    sortedTables = tables.sort((a, b) => {
      return a[heads[0]].localeCompare(b[heads[0]]);
    });
  }

  if (header.textContent === heads[1]) {
    sortedTables = tables.sort((a, b) => {
      return a[heads[1]].localeCompare(b[heads[1]]);
    });
  }

  if (header.textContent === heads[2]) {
    sortedTables = tables.sort((a, b) => {
      return +a[heads[2]] - +b[heads[2]];
    });
  }

  if (header.textContent === heads[3]) {
    sortedTables = tables.sort((a, b) => {
      const salary1 = parseInt(a[heads[3]].replace(/[$,]/g, ''));
      const salary2 = parseInt(b[heads[3]].replace(/[$,]/g, ''));

      return salary1 - salary2;
    });
  }

  const tbody = document.querySelector('tbody');

  Array.from(tbody.children).forEach((element) => {
    element.remove();
  });

  sortedTables.forEach((person) => {
    const {
      Name: personName,
      Position: position,
      Age: age,
      Salary: salary,
    } = person;
    const newTr = document.createElement('tr');
    const personArr = [personName, position, age, salary];

    personArr.forEach((item) => {
      const newTd = document.createElement('td');

      newTd.textContent = item;
      newTr.append(newTd);
    });

    tbody.append(newTr);
  });
});
