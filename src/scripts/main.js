'use strict';

// write code here
const headers = document.querySelectorAll('th');
const body = document.querySelector('tbody');
const rows = [...document.querySelectorAll('tbody > tr')];

const sorting = (x) => {
  const turnNumber = (a) => Number(a.split(',').join('').slice(1));

  switch (x) {
    case 1:
      return rows.sort((a, b) => {
        return a.children[0].innerText.localeCompare(b.children[0].innerText);
      });

    case 2:
      return rows.sort((a, b) => {
        return a.children[1].innerText.localeCompare(b.children[1].innerText);
      });

    case 3:
      return rows.sort((a, b) => {
        return (
          Number(a.children[2].innerText) - Number(b.children[2].innerText)
        );
      });

    case 4:
      return rows.sort((a, b) => {
        return (
          turnNumber(a.children[3].innerText) -
          turnNumber(b.children[3].innerText)
        );
      });
  }
};

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', () => body.prepend(...sorting(i + 1)));
}
