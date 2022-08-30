'use strict';

const table = document.querySelector('table');
const body = document.querySelector('tbody');

function sort(e) {
  if (e.target.tagName === 'TH') {
    const indexOfTitle = e.target.cellIndex;

    const allRows = body.querySelectorAll('tr');

    const sortedRows = [...allRows].sort((x, y) => {
      let prevObj = x.querySelectorAll('td')[indexOfTitle].innerText;
      let nextObj = y.querySelectorAll('td')[indexOfTitle].innerText;

      if (prevObj[0] === '$') {
        prevObj = +prevObj.slice(1).split(',').join('.');
        nextObj = +nextObj.slice(1).split(',').join('.');
      }

      return isNaN(prevObj)
        ? prevObj.localeCompare(nextObj)
        : prevObj - nextObj;
    }
    );

    body.append(...sortedRows);
  }
}

table.addEventListener('click', sort);
