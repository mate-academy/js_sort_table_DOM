'use strict';

// write code here

const tableHeader = document.querySelector('thead tr');
const people = [...document.querySelectorAll('tbody tr')];
const tableBody = document.querySelector('tbody');

function convert(string) {
  return string.slice(1).split(',').join('');
};

function tableSorting(humans, callback) {
  tableHeader.addEventListener('click', e => {
    const currentName = e.target.textContent;
    const tableRow = [...e.target.closest('tr').children];
    let rowIndex;

    let counter = 0;

    for (const child of tableRow) {
      if (child.textContent !== currentName) {
        counter++;
      } else {
        rowIndex = counter;
      }
    }

    if (rowIndex !== 3) {
      const digits = humans.sort((a, b) => {
        if (a.children[rowIndex].textContent
          < b.children[rowIndex].textContent) {
          return -1;
        } else if (a.children[rowIndex].textContent
          > b.children[rowIndex].textContent) {
          return 1;
        }
      });

      tableBody.append(...digits);
    } else {
      const salary = humans.sort((a, b) => {
        return convert(a.children[rowIndex].textContent)
        - convert(b.children[rowIndex].textContent);
      });

      tableBody.append(...salary);
    }
  });
}

tableSorting(people, convert);
