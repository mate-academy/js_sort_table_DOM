'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');

tHead.addEventListener('click', e => {
  const th = [...tHead.rows[0].children].indexOf(e.target);

  [...tBody.rows].sort((a, b) =>
    th > 1
      ? a.children[th].textContent.replace(/\$|,/g, '')
        - b.children[th].textContent.replace(/\$|,/g, '')
      : a.children[th].textContent.localeCompare(b.children[th].textContent))
    .forEach(row => tBody.append(row));
});
