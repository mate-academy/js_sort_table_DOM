'use strict';

const firstTr = document.querySelector('thead tr');

firstTr.addEventListener('click', (e) => {
  const link = e.target.closest('th');

  if (!link) {
    return;
  }

  const whatSort = link.textContent.toLowerCase();
  const employees = [];
  const collectionLi = [...document.querySelectorAll('tbody tr')];
  const tbody = document.querySelector('tbody');

  tbody.innerHTML = '';

  collectionLi.forEach((employee) => {
    employees.push({
      name: employee.firstElementChild.textContent,
      position: employee.firstElementChild.nextElementSibling.textContent,
      age: employee.lastElementChild.previousElementSibling.textContent,
      salary: Number(
        employee.lastElementChild.textContent.replace('$', '').replace(',', ''),
      ),
    });
  });

  employees.sort((a, b) => {
    if (typeof a[whatSort] === 'number') {
      return a[whatSort] - b[whatSort];
    } else {
      return a[whatSort].localeCompare(b[whatSort]);
    }
  });

  employees.forEach((element) => {
    const tr = document.createElement('tr');

    for (const key in element) {
      const td = document.createElement('td');

      td.textContent = element[key];
      tr.appendChild(td);
    }
    tbody.append(tr);
  });
});
