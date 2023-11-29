/* eslint-disable max-len */
'use strict';

const rows = Array.from(document.querySelector('tbody').querySelectorAll('tr'));

const titles = Array.from(document.querySelector('thead').querySelectorAll('th'));

function appendSortedELments(elements) {
  const tbody = document.querySelector('tbody');

  tbody.innerHTML = '';

  for (const row of rows) {
    tbody.append(row);
  }
}

titles[0].addEventListener('click', () => {
  rows.sort((row1, row2) => row1.children[0].innerText.localeCompare(row2.children[0].innerText));

  appendSortedELments(rows);
});

titles[1].addEventListener('click', () => {
  rows.sort((row1, row2) => row1.children[1].innerText.localeCompare(row2.children[1].innerText));

  appendSortedELments(rows);
});

titles[2].addEventListener('click', () => {
  rows.sort((row1, row2) => +row1.children[2].innerText - row2.children[2].innerText);

  appendSortedELments(rows);
});

titles[3].addEventListener('click', () => {
  rows.sort((row1, row2) => {
    const row1Number = parseFloat(row1.children[3].innerText.slice(1));
    const row2Number = parseFloat(row2.children[3].innerText.slice(1));

    return row1Number - row2Number;
  });

  appendSortedELments(rows);
});
