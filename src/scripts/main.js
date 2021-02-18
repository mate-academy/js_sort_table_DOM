'use strict';

// write code here

const body = document.body;
const tBody = document.querySelector('tbody');
const tData = [...tBody.querySelectorAll('tr')];
let colIndex = -1;

const sortTable = function(columnIdx, tHeaderName, isSorted) {
  const sortedData = tData.sort((p, n) => {
    let prev = [...p.querySelectorAll('td')][columnIdx].textContent;
    let next = [...n.querySelectorAll('td')][columnIdx].textContent;

    switch (tHeaderName) {
      case 'Name':
      case 'Position':
      case 'Office':
      case 'Age':
        return prev.localeCompare(next);
      case 'Salary':
        prev = prev.split('$').join('').split(',').join('');
        next = next.split('$').join('').split(',').join('');

        return parseFloat(prev) - parseFloat(next);
    }
  });

  if (isSorted) {
    tData.reverse();
  }

  tBody.append(...sortedData);
};

const selectedRow = function(target) {
  const currentRow = document.querySelectorAll('.active');

  if (currentRow.length > 0) {
    currentRow[0].className = currentRow[0].className.replace('active', '');
  }
  target.parentElement.className = 'active';
};

body.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'BODY') {
    return;
  }

  if (target.tagName === 'TH') {
    const columnIdx = target.cellIndex;
    const tHeaderName = target.textContent;

    sortTable(columnIdx, tHeaderName, colIndex === columnIdx);
    colIndex = (colIndex === columnIdx) ? -1 : columnIdx;
  }

  if (target.tagName === 'TD') {
    selectedRow(target);
  }
});
