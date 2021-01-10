'use strict';

const tableHead = document.querySelector('thead');
const tableBlock = document.querySelector('table');
const tableHeaders = [...tableHead.firstElementChild.children];
const tableRows = [...tableBlock.children[1].querySelectorAll('tr')];

tableHead.addEventListener('click', (event) => {
  const index = tableHeaders.indexOf(event.target);
  const rowContent = [...tableRows[0].children][index].textContent;

  if (event.target.tagName !== 'TH') {
    return;
  };

  if (parseFloat(rowContent.match(/\w/g).join(''))) {
    tableRows.sort((a, b) => {
      const aValue = [...a.children][index].textContent.match(/\w/g);
      const bValue = [...b.children][index].textContent.match(/\w/g);

      return Number(bValue.join('')) - Number(aValue.join(''));
    });
  } else {
    tableRows.sort((a, b) => {
      const aValue = [...a.children][index].textContent;
      const bValue = [...b.children][index].textContent;

      return bValue.localeCompare(aValue);
    });
  }

  tableBlock.children[1].append(...tableRows);
});
