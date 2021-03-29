'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tbodyRows = [...document.querySelector('tbody').rows];

const toNumber = function(string) {
  return +string.replace(/[$,]/g, '');
};

thead.addEventListener('click', ev => {
  const sort = tbodyRows.sort((first, second) => {
    const firtstChildren = first.children[ev.target.cellIndex].innerText;
    const secondChildren = second.children[ev.target.cellIndex].innerText;

    if (!isNaN(toNumber(firtstChildren))) {
      return toNumber(firtstChildren) - toNumber(secondChildren);
    } else {
      return firtstChildren.localeCompare(secondChildren);
    }
  });

  tbody.append(...sort);
});
