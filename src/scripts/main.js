'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');
const rows = [...document.querySelectorAll('tbody tr')];

head.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const index = Array.from(e.target.parentNode.children).indexOf(e.target);

    rows.sort((row1, row2) => {
      const columns1 = [...row1.querySelectorAll('td')];
      const columns2 = [...row2.querySelectorAll('td')];
      const cell1 = columns1[index].textContent;
      const cell2 = columns2[index].textContent;

      if (index <= 1) {
        return cell1.localeCompare(cell2);
      } else {
        const first = +cell1.replace(/[$,]/g, '');
        const second = +cell2.replace(/[$,]/g, '');

        return first - second;
      }
    });

    body.textContent = '';

    rows.forEach((row) => {
      body.appendChild(row);
    });
  }
});
