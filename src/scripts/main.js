'use strict';

const table = document.querySelector('table');
const headers = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');
const rows = [...tbody.querySelectorAll('tr')];

table.addEventListener('click', e => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  let indexOfCurrentHeader = [...headers].indexOf(e.target);

  rows.sort((a, b) => {
    const firstData = a.children[indexOfCurrentHeader].innerText;
    const secondData = b.children[indexOfCurrentHeader].innerText;

    return firstData.localeCompare(secondData, undefined, {
      numeric: true, sensitivity: 'base',
    });
  });

  rows.forEach(row => tbody.append(row));
});
