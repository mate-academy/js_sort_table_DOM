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
    rows.sort((prevRow, curRow) => {
      const prevValue = [...prevRow.children][index].textContent.match(/\w/g);
      const curValue = [...curRow.children][index].textContent.match(/\w/g);

      return Number(prevValue.join('')) - Number(curValue.join(''));
    });
  } else {
    rows.sort((prev, cur) => {
      const prevValue = [...prev.children][index].textContent;
      const curValue = [...cur.children][index].textContent;

      return prevValue.localeCompare(curValue);
    });
  }

  table.children[1].append(...rows);
});
