'use strict';

const table = document.querySelector('table');
const thead = document.querySelector('thead');

thead.addEventListener('click', e => {
  const data = Array.from(table.children[1].rows);
  const i = e.target.cellIndex;
  const newTbody = document.createElement('tbody');
  let callback;

  table.children[1].remove();

  switch (e.target.textContent) {
    case 'Name':
    case 'Position':
      callback = (a, b) => {
        return a.cells[i].textContent.localeCompare(b.cells[i].textContent);
      };
      break;

    case 'Age':
      callback = (a, b) => {
        return a.cells[i].textContent - b.cells[i].textContent;
      };
      break;

    case 'Salary':
      callback = (a, b) => {
        return a.cells[i].textContent.slice(1).split(',').join('')
        - b.cells[i].textContent.slice(1).split(',').join('');
      };
      break;
  };

  data.sort(callback);
  newTbody.append(...data);
  table.children[1].insertAdjacentElement('beforeBegin', newTbody);
});
