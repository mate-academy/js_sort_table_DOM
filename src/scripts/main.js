'use strict';

const headers = document.querySelectorAll('th');
const tableBody = document.querySelector('tbody');
const allEmployees = tableBody.rows;

const sortList = (ulNode, index) => {
  [...allEmployees].sort((prev, next) => {
    if (prev.children[index].textContent.charAt(0) === '$') {
      return convertToNumber(prev.children[index].textContent)
        - convertToNumber(next.children[index].textContent);
    } else {
      return (prev.children[index].textContent)
        .localeCompare(next.children[index].textContent);
    }
  }).forEach(item => ulNode.append(item));
};

for (let i = 0; i <= headers.length; i++) {
  headers[i].addEventListener('click', () => {
    sortList(tableBody, i);
  });
}

function convertToNumber(number) {
  return +number.replace('$', '').replace(',', '.');
}
