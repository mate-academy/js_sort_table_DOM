'use strict';

const list = document.querySelector('tbody');
const row = list.querySelectorAll('tr');
const head = document.querySelector('thead');

head.addEventListener('click', () => {
  let arr = [];
  const colum = event.target.cellIndex;

  arr = [...row].sort((a, b) =>

    a.children[colum].textContent.localeCompare(b.children[colum].textContent)
  );

  if (event.target.textContent === 'Age') {
    arr = [...row].sort((a, b) =>

      +a.children[colum].textContent - (+b.children[colum].textContent)
    );
  }

  if (event.target.textContent === 'Salary') {
    arr = [...row].sort((a, b) =>

      (+a.children[colum].textContent.slice(1).split(',').join(''))
      - (+b.children[colum].textContent.slice(1).split(',').join(''))
    );
  }
  list.append(...arr);
});
