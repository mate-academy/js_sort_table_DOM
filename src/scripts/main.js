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

  // eslint-disable-next-line max-len
  if (parseFloat([...rows[0].children][index].textContent.match(/\w/g).join(''))) {
    // eslint-disable-next-line max-len
    rows.sort((a, b) => +([...a.children][index].textContent.match(/\w/g).join('')) - +([...b.children][index].textContent.match(/\w/g).join('')));
  } else {
    // eslint-disable-next-line max-len
    rows.sort((a, b) => [...a.children][index].textContent.localeCompare([...b.children][index].textContent));
  }

  table.children[1].append(...rows);
});
