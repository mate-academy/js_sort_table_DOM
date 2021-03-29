'use strict';

// write code here
const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tbodyRows = [...document.querySelector('tbody').rows];

const onlyNumber = function(string) {
  return +string.replace(/[$,]/g, '');
};

thead.addEventListener('click', (ev) => {
  const sort = tbodyRows.sort((tdA, tdB) => {
    const first = tdA.children[ev.target.cellIndex].innerText;
    const second = tdB.children[ev.target.cellIndex].innerText;

    if (!isNaN(onlyNumber(first))) {
      return onlyNumber(first) - onlyNumber(second);
    } else {
      return first.localeCompare(second);
    }
  });

  tbody.append(...sort);
});
