'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const arrayPeople = [];

for (let i = 0; i <= tbody.children.length - 1; i++) {
  const people = {
    name: tbody.rows[i].cells[0].innerText,
    position: tbody.rows[i].cells[1].innerText,
    age: tbody.rows[i].cells[2].innerHTML,
    salary: tbody.rows[i].cells[3].innerHTML,
  };

  arrayPeople.push(people);
};

thead.addEventListener('click', (e) => {
  if (e.target.innerText === 'Name') {
    sortEmployees(arrayPeople, e.target.innerText);
    showSorted(arrayPeople);
  }

  if (e.target.innerText === 'Position') {
    sortEmployees(arrayPeople, e.target.innerText);
    showSorted(arrayPeople);
  }

  if (e.target.innerText === 'Age') {
    sortEmployees(arrayPeople, e.target.innerText);
    showSorted(arrayPeople);
  }

  if (e.target.innerText === 'Salary') {
    sortEmployees(arrayPeople, e.target.innerText);

    showSorted(arrayPeople);
  }
}
);

function showSorted(list) {
  tbody.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    tbody.innerHTML += `
    <tr>
      <td>${list[i].name}</td>
      <td>${list[i].position}</td>
      <td>${list[i].age}</td>
      <td>${list[i].salary}</td>
    </tr>
    `;
  }
};

function sortEmployees(array, field) {
  const fieldLower = field.toLowerCase();

  array.sort((a, b) => {
    return Number(a[fieldLower].replace(/[^\d]/g, ''))
      ? a[fieldLower].replace(/[^\d]/g, '')
      - b[fieldLower].replace(/[^\d]/g, '')
      : a[fieldLower].localeCompare(b[fieldLower]);
  });
}
