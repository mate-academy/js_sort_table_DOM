'use strict';

const tableBody = document.querySelector('tbody');
const rowsArray = Array.from(document.querySelectorAll('tbody tr'));
const headings = document.querySelector('thead');
const headingsArray = [];

Array.from(headings.firstElementChild.children).forEach(heading => {
  headingsArray.push(heading.textContent);
});

function convertToNumber(string) {
  return parseInt(string.slice(1).replaceAll(',', ''));
}

headings.addEventListener('click', e => {
  const index = headingsArray.indexOf(e.target.textContent);

  rowsArray.sort((a, b) => {
    const aTextContent = a.cells[index].textContent;
    const bTextContent = b.cells[index].textContent;

    if (+aTextContent) {
      return +aTextContent - (+bTextContent);
    } else if (+convertToNumber(aTextContent)) {
      return convertToNumber(aTextContent)
      - convertToNumber(bTextContent);
    } else if (typeof aTextContent === 'string'
    && !convertToNumber(aTextContent)) {
      return aTextContent.localeCompare(bTextContent);
    }
  });

  rowsArray.forEach(row => {
    tableBody.appendChild(row);
  });
});
