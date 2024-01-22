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
  if (e.target.innerText === 'Salary') {
    const sorted = employees.sort((employee1, employee2) => {
      return convertToNumber(employee1.children[3].innerText)
        > convertToNumber(employee2.children[3].innerText) ? 1 : -1;
    });

    tableBody.innerHTML = `
      ${sorted.map(element => `
        <tr>
          <td>${element.children[0].innerText}</td>
          <td>${element.children[1].innerText}</td>
          <td>${element.children[2].innerText}</td>
          <td>${element.children[3].innerText}</td>
        </tr>
      `).join('')}
    `;
  }

  if (e.target.innerText === 'Age') {
    const sorted = employees.sort((employee1, employee2) => {
      return +employee1.children[2].innerText
        > +employee2.children[2].innerText ? 1 : -1;
    });

    tableBody.innerHTML = `
      ${sorted.map(element => `
        <tr>
          <td>${element.children[0].innerText}</td>
          <td>${element.children[1].innerText}</td>
          <td>${element.children[2].innerText}</td>
          <td>${element.children[3].innerText}</td>
        </tr>
      `).join('')}
    `;
  }

  if (e.target.innerText === 'Name') {
    const sorted = employees.sort((employee1, employee2) => {
      return employee1.children[0].innerText
        .localeCompare(employee2.children[0].innerText);
    });

    tableBody.innerHTML = `
      ${sorted.map(element => `
        <tr>
          <td>${element.children[0].innerText}</td>
          <td>${element.children[1].innerText}</td>
          <td>${element.children[2].innerText}</td>
          <td>${element.children[3].innerText}</td>
        </tr>
      `).join('')}
    `;
  }

  if (e.target.innerText === 'Position') {
    const sorted = employees.sort((employee1, employee2) => {
      return employee1.children[1].innerText
        .localeCompare(employee2.children[1].innerText);
    });

    tableBody.innerHTML = `
      ${sorted.map(element => `
        <tr>
          <td>${element.children[0].innerText}</td>
          <td>${element.children[1].innerText}</td>
          <td>${element.children[2].innerText}</td>
          <td>${element.children[3].innerText}</td>
        </tr>
      `).join('')}
    `;
  }
});
