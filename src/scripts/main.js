'use strict';

const headList = document.querySelector('thead');
const headName = [
  ...headList.querySelectorAll('thead th')].map(i => i.innerText);

const body = document.querySelector('tbody');
const rows = [...body.querySelectorAll('tr')];

body.addEventListener('click', (e) => {
  let sorted;
  const target = e.target.closest('th').innerText;
  const numOfColum = headName.indexOf(target);

  if (numOfColum >= 2) {
    sorted = rows.sort((a, b) =>
      cell(a, numOfColum) - (cell(b, numOfColum)));
  } else {
    sorted = rows.sort((a, b) =>
      cell(a, numOfColum).localeCompare(cell(b, numOfColum)));
  };
  sorted.map(i => body.appendChild(i));
});

const cell = (row, n) => row.children[n].textContent.replace(/[$,]/g, '');
