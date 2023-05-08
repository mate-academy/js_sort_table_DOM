'use strict';

const headers = document.querySelectorAll('th');
const tableBody = document.querySelector('tbody');
const allEmployees = tableBody.rows;

const sortList = (index) => {
  [...allEmployees]
    .sort((prev, next) => {
      const prevContent = prev.children[index].textContent;
      const nextContent = next.children[index].textContent;

      if (prevContent.charAt(0) === '$') {
        return convertToNumber(prevContent) - convertToNumber(nextContent);
      };

      return (prevContent).localeCompare(nextContent);
    })
    .forEach(item => tableBody.append(item));
};

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortList(index);
  });
});

function convertToNumber(number) {
  return +number.replace('$', '').replace(',', '.');
}
