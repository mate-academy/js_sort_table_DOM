'use strict';

function convertToNumber(text) {
  return +(text.replace('$', '').replace(',', ''));
}

const tableHead = document.querySelector('thead');

const tableBody = document.querySelector('tbody');

const allRows = document.querySelectorAll('tr');

const employees = [...allRows].splice(1);

employees.pop();

tableHead.addEventListener('click', e => {
  switch (e.target.innerText) {
    case 'Salary':
      employees.sort((employee1, employee2) => {
        return convertToNumber(employee1.children[3].innerText)
          > convertToNumber(employee2.children[3].innerText) ? 1 : -1;
      });
      break;

    case 'Age':
      employees.sort((employee1, employee2) => {
        return +employee1.children[2].innerText
          > +employee2.children[2].innerText ? 1 : -1;
      });
      break;

    case 'Position':
      employees.sort((employee1, employee2) => {
        return employee1.children[1].innerText
          .localeCompare(employee2.children[1].innerText);
      });
      break;

    case 'Name':
      employees.sort((employee1, employee2) => {
        return employee1.children[0].innerText
          .localeCompare(employee2.children[0].innerText);
      });
      break;
  }

  tableBody.innerHTML = `
      ${employees.map(element => `
        <tr>
          <td>${element.children[0].innerText}</td>
          <td>${element.children[1].innerText}</td>
          <td>${element.children[2].innerText}</td>
          <td>${element.children[3].innerText}</td>
        </tr>
      `).join('')}
    `;
});
