'use strict';

const bodyOfTable = document.querySelector('tbody');

const headOfTable = document.querySelector('tHead > tr');

const tableRows = bodyOfTable.rows;

headOfTable.addEventListener('click', () => {
  let arrayByName;

  switch (true) {
    case event.target.cellIndex === 0:
      arrayByName = [...tableRows].sort((a, b) => {
        return a.children[0].innerText.localeCompare(b.children[0].innerText);
      });
      break;

    case event.target.cellIndex === 1:
      arrayByName = [...tableRows].sort((a, b) => {
        return a.children[1].innerText.localeCompare(b.children[1].innerText);
      });
      break;

    case event.target.cellIndex === 2:
      arrayByName = [...tableRows].sort((a, b) =>
        a.children[2].innerText - b.children[2].innerText);
      break;

    case event.target.cellIndex === 3:
      arrayByName = [...tableRows].sort((a, b) => {
        const first = parseFloat((a.children[3].innerText).slice(1));
        const second = parseFloat((b.children[3].innerText).slice(1));

        return first - second;
      });
  }

  arrayByName.forEach(element => bodyOfTable.append(element));
});
