'use strict';

// write code here

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const tablerows = document.querySelectorAll('tbody tr');
const tablerowsArray = Array.from(tablerows);

table.addEventListener('click', function(evt) {
  const clickedColumnIndex = evt.target.cellIndex + 1;

  const sorted = tablerowsArray.sort((a, b) => {
    const itemOne = a.querySelector(`td:nth-child(${clickedColumnIndex}`)
      .innerHTML;
    const itemTwo = b.querySelector(`td:nth-child(${clickedColumnIndex}`)
      .innerHTML;

    return itemOne.localeCompare(itemTwo, 'en', { numeric: 'true' });
  });

  sorted.forEach(row => {
    tableBody.appendChild(row);
  });
});
