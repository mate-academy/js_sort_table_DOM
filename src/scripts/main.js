'use strict';

const theadRows = document.querySelector('thead tr');
const tbodyElement = document.querySelector('tbody');

theadRows.addEventListener('click', e => {
  const trElements = [];
  let columnNumber;

  for (let i = 0; i < theadRows.children.length; i++) {
    if (theadRows.children.item(i) === e.target) {
      columnNumber = i;
    }
  }

  for (const trChild of tbodyElement.children) {
    trElements.push(trChild);
  }

  trElements.sort((a, b) => {
    let aData = a.children[columnNumber].textContent;
    let bData = b.children[columnNumber].textContent;

    if (columnNumber === 3) {
      aData = aData.replace(/[$-,]/g, '');
      bData = bData.replace(/[$-,]/g, '');

      return aData - bData;
    }

    return aData.localeCompare(bData);
  });

  for (const child of trElements) {
    tbodyElement.removeChild(child);
  }

  for (const trElement of trElements) {
    tbodyElement.appendChild(trElement);
  }
});
