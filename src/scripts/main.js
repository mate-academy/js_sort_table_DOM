'use strict';

const tableHeaders = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

const tableData = [...tableBody.children].map(tableRow => ({
  name: tableRow.children[0].innerText,
  position: tableRow.children[1].innerText,
  age: tableRow.children[2].innerText,
  salary: tableRow.children[3].innerText,
}));

tableHeaders.addEventListener('click', () => {
  tableData.sort((element1, element2) => {
    switch (event.target.innerText) {
      case 'Name':
        return element1.name.localeCompare(element2.name);
      case 'Position':
        return element1.position.localeCompare(element2.position);
      case 'Age':
        return element1.age - element2.age;
      default:
        return +changeSalaryFormat(element1.salary)
        - +changeSalaryFormat(element2.salary);
    }
  });

  tableBody.innerHTML = '';

  tableBody.insertAdjacentHTML('afterbegin', `
    ${tableData.map(tableRow => {
    return `<tr>
      <td>${tableRow.name}</td>
      <td>${tableRow.position}</td>
      <td>${tableRow.age}</td>
      <td>${tableRow.salary}</td>
    </tr>`;
  }).join('')}
`);
});

function changeSalaryFormat(salary) {
  return salary.slice(1).replace(/,/g, '');
}
