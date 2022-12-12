'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const rows = [...tBody.children];
let reverse = false;

function sortedBy(a, b, string, boolean) {
  switch (string) {
    case 'Name':
    case 'Position':
      return boolean
        ? b.textContent.localeCompare(a.textContent)
        : a.textContent.localeCompare(b.textContent);

    case 'Age':
    case 'Salary':
      return !+a.textContent
        ? boolean
          ? +b.textContent.slice(1).split(',').join('')
            - +a.textContent.slice(1).split(',').join('')
          : +a.textContent.slice(1).split(',').join('')
            - +b.textContent.slice(1).split(',').join('')
        : boolean
          ? +b.textContent - +a.textContent
          : +a.textContent - +b.textContent;

    default:
      break;
  }
}

function handleEvent(evnt) {
  let newList = [...rows];

  switch (evnt.target.textContent) {
    case 'Name':
      newList = [...rows].sort(
        (a, b) =>
          sortedBy(a.children[0], b.children[0], 'Name', reverse)
      );
      break;

    case 'Position':
      newList = [...rows].sort(
        (a, b) =>
          sortedBy(a.children[1], b.children[1], 'Position', reverse)
      );
      break;

    case 'Age':
      newList = [...rows].sort(
        (a, b) =>
          sortedBy(a.children[2], b.children[2], 'Age', reverse)
      );
      break;

    case 'Salary':
      newList = [...rows].sort(
        (a, b) =>
          sortedBy(a.children[3], b.children[3], 'Salary', reverse)
      );
      break;

    default:
      break;
  }

  for (const item of newList) {
    tBody.append(item);
  }

  reverse = !reverse;
}

tHead.addEventListener('click', handleEvent);
