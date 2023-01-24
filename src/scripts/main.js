'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const headers = thead.querySelector('tr');
const tr = tbody.querySelectorAll('tr');
let sorted = [];

function removeSeparator(string) {
  return string.split(',').join('').split('$').join('');
}

function sortStrings(data, key) {
  const dataTable = [...data];

  const newDataTable = dataTable.sort((a, b) => {
    const stringA = a.children[key].textContent;
    const stringB = b.children[key].textContent;

    if (stringA > stringB) {
      return 1;
    }

    if (stringA === stringB) {
      return 0;
    }

    return -1;
  });

  return newDataTable;
}

function sortNumbers(data, key) {
  const dataTable = [...data];

  const newDataTable = dataTable.sort((a, b) => {
    const stringA = a.children[key].textContent;
    const stringB = b.children[key].textContent;
    const numA = parseInt(removeSeparator(stringA));
    const numB = parseInt(removeSeparator(stringB));

    return numA - numB;
  });

  return newDataTable;
}

thead.addEventListener('click', e => {
  if (!e.target.closest('thead')) {
    return;
  }

  switch (e.target.textContent) {
    case headers.children[0].textContent :
      sorted = sortStrings(tr, 0);
      break;
    case headers.children[1].textContent :
      sorted = sortStrings(tr, 1);
      break;
    case headers.children[2].textContent :
      sorted = sortNumbers(tr, 2);
      break;
    case headers.children[3].textContent :
      sorted = sortNumbers(tr, 3);
      break;
    default :
      sorted = [...tr];
      break;
  }

  tbody.innerHTML = `
    ${sorted.map(el => `
    <tr>
      <td>${el.children[0].textContent}</td>
      <td>${el.children[1].textContent}</td>
      <td>${el.children[2].textContent}</td>
      <td>${el.children[3].textContent}</td>
    </tr>
    `).join('')}
  `;
});
