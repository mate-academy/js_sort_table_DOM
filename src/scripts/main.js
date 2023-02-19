'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const rows = [...tbody.querySelectorAll('tr')];

table.addEventListener('click', e => {
  if (e.target.tagName === 'TH') {
    const headerIndex = [...e.target.parentNode.children].indexOf(e.target);

    rows.sort((a, b) => {
      const aData = a.children[headerIndex].textContent;
      const bData = b.children[headerIndex].textContent;

      return aData.localeCompare(bData, undefined, {
        numeric: true, sensitivity: 'base',
      });
    });
    rows.forEach((row) => tbody.appendChild(row));
  }
});
