'use strict';

// write code here

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

const currentSort = {
  'Name': false,
  'Position': false,
  'Age': false,
  'Salary': false,
};

const sorting = (e) => {
  const handleButton = e.target.innerText;

  [...tableBody.children]
    .sort((a, b) => {
      let [x, y] = [a, b];

      if (currentSort[handleButton]) {
        [x, y] = [y, x];
      }

      switch (handleButton) {
        case 'Name':
          return x.children[0].innerText.localeCompare(y.children[0].innerText);
        case 'Position':
          return x.children[1].innerText.localeCompare(y.children[1].innerText);
        case 'Age':
          return (x.children[2].innerText - y.children[2].innerText);
        default:
          x = x.children[3].innerText.replace(/[^0-9]/gi, '');
          y = y.children[3].innerText.replace(/[^0-9]/gi, '');

          return y - x;
      }
    })
    .map(elem => tableBody.append(elem));

  currentSort[handleButton] = !currentSort[handleButton];
};

tableHeader.addEventListener('click', sorting);
