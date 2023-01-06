'use strict';

function toNumber(string) {
  const num = +string.slice(1).split(',').join('');

  return num;
}

const headings = document.querySelector('thead');
const table = document.querySelector('tbody');

headings.addEventListener('click', (e) => {
  const criterion = e.target.cellIndex;
  const sortedList
   = [...table.children].sort((a, b) => {
     let current = a.cells[criterion].innerText;
     let next = b.cells[criterion].innerText;

     if (criterion === 3 || criterion === 4) {
       current = toNumber(current);
       next = toNumber(next);

       return current - next;
     }

     return current.localeCompare(next);
   });

  sortedList.forEach((row) => table.append(row));
});
