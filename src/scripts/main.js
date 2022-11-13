'use strict';

function getNumber(str) {
  return +str.slice(1).replaceAll(',', '');
}

const info = document.querySelector('tbody');

document.body.addEventListener('click', e => {
  const cellIndex = e.target.innerText === 'Position'
    ? 1
    : 0;

  const sort = [...info.children].sort((a, b) => {
    switch (e.target.innerText) {
      case ('Salary'):
        let first = getNumber(a.children[3].innerText);
        let second = getNumber(b.children[3].innerText);

        return first - second;

      case ('Age'):
        first = +a.children[2].innerText;
        second = +b.children[2].innerText;

        return first - second;

      default:
        first = a.children[cellIndex].innerText;
        second = b.children[cellIndex].innerText;

        return first.localeCompare(second);
    }
  });

  for (let i = 0; i < sort.length; i++) {
    let newTr = document.createElement('tr');

    newTr = sort[i];
    info.append(newTr);
  }
});
