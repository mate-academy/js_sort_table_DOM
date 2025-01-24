'use strict';

const tbody = document.querySelector('tbody');
const trows = document.querySelectorAll('tbody tr');
const headerElements = document.querySelectorAll('thead tr th');

function sortByName(objects) {
  return objects.sort((a, b) => a.name.localeCompare(b.name));
}

function sortByPosition(objects) {
  return objects.sort((a, b) => a.position.localeCompare(b.position));
}

function sortByAge(objects) {
  return objects.sort((a, b) => +a.age - +b.age);
}

function sortBySalary(objects) {
  return objects.sort((a, b) => {
    const salaryA = parseInt(a.salary.slice(1).replace(/,/g, ''), 10);
    const salaryB = parseInt(b.salary.slice(1).replace(/,/g, ''), 10);

    return salaryA - salaryB;
  });
}

const users = Array.from(trows).map((row) => {
  const cells = row.querySelectorAll('td');

  return {
    name: cells[0].textContent.trim(),
    position: cells[1].textContent.trim(),
    age: cells[2].textContent.trim(),
    salary: cells[3].textContent.trim(),
  };
});

headerElements.forEach((elem) => {
  elem.addEventListener('click', () => {
    const column = elem.textContent.trim();

    if (column === 'Age') {
      sortByAge(users);
    } else if (column === 'Name') {
      sortByName(users);
    } else if (column === 'Position') {
      sortByPosition(users);
    } else if (column === 'Salary') {
      sortBySalary(users);
    }

    const fragment = document.createDocumentFragment();

    users.forEach((user) => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.position}</td>
          <td>${user.age}</td>
          <td>${user.salary}</td>
      `;
      fragment.appendChild(row);
    });

    tbody.innerHTML = '';
    tbody.append(fragment);
  });
});
