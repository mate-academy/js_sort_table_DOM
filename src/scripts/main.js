'use strict';

const headers = document.querySelectorAll('th');
const tBody = document.querySelector('tBody');
const rows = document.querySelectorAll('tBody tr');

const array = [...rows];
const copyArray = [...array];

headers.forEach((header) => {
  header.addEventListener('click', function (element) {
    const index = element.target.cellIndex;

    sortBy(copyArray, index);
  });
});

function sortBy(arrayOf, index) {
  arrayOf.sort((td1, td2) => {
    if (index === 0 || index === 1) {
      return td1.children[index].innerHTML.localeCompare(
        td2.children[index].innerHTML,
      );
    } else {
      return (
        Number(
          td1.children[index].innerHTML.replace(',', '').replace('$', ''),
        ) -
        Number(td2.children[index].innerHTML.replace(',', '').replace('$', ''))
      );
    }
  });

  arrayOf.forEach((tr) => {
    tBody.appendChild(tr);
  });
}
