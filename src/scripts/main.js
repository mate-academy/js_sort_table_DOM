'use strict';

const table = document.getElementsByTagName('table');

const rowsBody = table[0].tBodies[0].rows;
const rowsHead = table[0].tHead.rows;

for (const item of rowsHead[0].cells) {
  const spanElem = document.createElement('span');

  spanElem.textContent = item.innerText;
  item.firstChild.nodeValue = '';
  item.prepend(spanElem);
}

document.addEventListener('click', (e) => {
  let sort = [];

  if (e.target.tagName !== 'SPAN') {
    return;
  }

  switch (e.target.textContent) {
    case 'Name':
      sort = Sort([...rowsBody], 0);
      break;
    case 'Position':
      sort = Sort([...rowsBody], 1);
      break;
    case 'Age':
      sort = Sort([...rowsBody], 2);
      break;
    case 'Salary':
      sort = Sort([...rowsBody], 3);
      break;
  }

  table[0].tBodies[0].append(...sort);
});

function Sort(arrayRows, column) {
  switch (column) {
    case 0: case 1:
      return [...rowsBody].sort((a, b) => {
        const A = a.children[column].textContent;
        const B = b.children[column].textContent;

        return (A < B) ? -1 : (A > B) ? 1 : 0;
      });
    case 2:
      return [...rowsBody].sort((a, b) => {
        return +a.children[column].textContent
        - +b.children[column].textContent;
      });
    case 3:
      return [...rowsBody].sort((a, b) => {
        const A = +a.children[column].textContent.slice(1).replace(',', '.');
        const B = +b.children[column].textContent.slice(1).replace(',', '.');

        return A - B;
      });
  }
}
