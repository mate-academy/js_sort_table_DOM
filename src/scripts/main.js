'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

if (!tableHead || !tableBody) {
  const bothMissing = !tableHead && !tableBody;
  const elementWord = bothMissing ? 'elements' : 'element';
  const details = bothMissing ? 'head and body' : !tableHead ? 'head' : 'body';

  throw new Error(`Table ${details} ${elementWord} not found.`);
}

tableHead.addEventListener('click', (clickEvent) => {
  const clickedElement = clickEvent.target;

  if (clickedElement.tagName !== 'TH') {
    return;
  }

  const headerRow = tableHead.children[0];

  if (!headerRow) {
    return;
  }

  const columnIndex = Array.from(headerRow.children).indexOf(clickedElement);

  const rows = Array.from(tableBody.children);

  rows.sort((a, b) => {
    const cellA = a.children[columnIndex].textContent.trim();
    const cellB = b.children[columnIndex].textContent.trim();

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  tableBody.replaceChildren(...rows);
});
