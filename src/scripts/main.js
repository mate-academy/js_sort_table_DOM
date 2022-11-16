'use strict';

const headList = document.querySelector('thead');
const headName = [
  ...document.querySelectorAll('thead th')].map(i => i.innerText);

const body = document.querySelector('tbody');
const rows = [...body.querySelectorAll('tr')];
const getCellContent = (row, n) => row.children[n]
  .textContent.replace(/[$,]/g, '');

headList.addEventListener('click', (e) => {
  let sorted;
  const target = e.target.closest('th').innerText;
  const numOfColum = headName.indexOf(target);

  if (numOfColum >= 2) {
    sorted = rows.sort((a, b) =>
      getCellContent(a, numOfColum) - (getCellContent(b, numOfColum)));
  } else {
    sorted = rows.sort((a, b) =>
      getCellContent(a, numOfColum)
        .localeCompare(getCellContent(b, numOfColum)));
  };
  sorted.forEach(item => body.appendChild(item));
});
