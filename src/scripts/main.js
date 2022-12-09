'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const rows = [...tBody.children];
let reverse = false;

function handleEvent(e) {
  let newList = [...rows];

  if (reverse) {
    reverse = false;

    switch (e.target.textContent) {
      case 'Name':
        newList = [...rows].sort(
          (a, b) =>
            b.children[0].textContent.localeCompare(a.children[0].textContent)
        );
        break;

      case 'Position':
        newList = [...rows].sort(
          (a, b) =>
            b.children[1].textContent.localeCompare(a.children[1].textContent)
        );
        break;

      case 'Age':
        newList = [...rows].sort(
          (a, b) =>
            +b.children[2].textContent - +a.children[2].textContent
        );
        break;

      case 'Salary':
        newList = [...rows].sort(
          (a, b) =>
            +b.children[3].textContent.slice(1).split(',').join('')
              - +a.children[3].textContent.slice(1).split(',').join('')
        );
        break;

      default:
        break;
    }
  } else {
    reverse = true;

    switch (e.target.textContent) {
      case 'Name':
        newList = [...rows].sort(
          (a, b) =>
            a.children[0].textContent.localeCompare(b.children[0].textContent)
        );
        break;

      case 'Position':
        newList = [...rows].sort(
          (a, b) =>
            a.children[1].textContent.localeCompare(b.children[1].textContent)
        );
        break;

      case 'Age':
        newList = [...rows].sort(
          (a, b) =>
            +a.children[2].textContent - +b.children[2].textContent
        );
        break;

      case 'Salary':
        newList = [...rows].sort(
          (a, b) =>
            +a.children[3].textContent.slice(1).split(',').join('')
              - +b.children[3].textContent.slice(1).split(',').join('')
        );
        break;

      default:
        break;
    }
  }

  for (const item of newList) {
    tBody.append(item);
  }
}

tHead.addEventListener('click', handleEvent);
