'use strict';

const head = document.querySelector('thead');
const table = document.querySelector('table');
const headers = [...head.firstElementChild.children];
const rows = [...table.children[1].querySelectorAll('tr')];

head.addEventListener('click', (event) => {
  if (event.target.tagName !== 'TH') {
    return;
  };

  const index = headers.indexOf(event.target);
  const rowContent = [...rows[0].children][index].textContent;

  if (parseFloat(rowContent.match(/\w/g).join(''))) {
    rows.sort((a, b) => {
      const aValue = [...a.children][index].textContent.match(/\w/g);
      const bValue = [...b.children][index].textContent.match(/\w/g);

      return Number(bValue.join('')) - Number(aValue.join(''));
    });
  } else {
    rows.sort((a, b) => {
      const aValue = [...a.children][index].textContent;
      const bValue = [...b.children][index].textContent;

      return bValue.localeCompare(aValue);
    });
  }

  table.children[1].append(...rows);
});
