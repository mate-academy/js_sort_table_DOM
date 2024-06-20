'use strict';

const tHead = document.querySelector('thead');

tHead.querySelector('tr').addEventListener('click', (e) => {
  const titles = [...tHead.querySelectorAll('th')];

  const currentIndex = titles.indexOf(e.target);

  const tBody = document.querySelector('tbody');

  const rows = [...tBody.querySelectorAll('tr')];

  rows.sort((row1, row2) => {
    let sell1 = row1.children[currentIndex].textContent;
    let sell2 = row2.children[currentIndex].textContent;

    if (sell1.startsWith('$')) {
      sell1 = parseFloat(sell1.slice(1));
      sell2 = parseFloat(sell2.slice(1));

      return sell1 - sell2;
    }

    if (parseFloat(sell1)) {
      sell1 = parseFloat(sell1);
      sell2 = parseFloat(sell2);

      return sell1 - sell2;
    }

    return sell1.localeCompare(sell2);
  });

  rows.forEach((row) => {
    tBody.insertAdjacentElement('beforeend', row);
  });
});
