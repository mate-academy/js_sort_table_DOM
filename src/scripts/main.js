'use strict';

function getNumber(str) {
  return str.includes('$')
    ? +str.slice(1).replaceAll(',', '')
    : +str;
}

const info = document.querySelector('tbody');

document.body.addEventListener('click', e => {
  const sort = [...info.children].sort((a, b) => {
    const isCompareAsNumber = e.target
      .innerText === 'Salary' || e.target.innerText === 'Age';
    const isCompareAsString = e.target
      .innerText === 'Name' || e.target.innerText === 'Position';

    if (isCompareAsNumber) {
      const cellIndex = e.target.innerText === 'Salary' ? 3 : 2;
      const first = getNumber(a.children[cellIndex].innerText);
      const second = getNumber(b.children[cellIndex].innerText);

      return first - second;
    } else if (isCompareAsString) {
      const cellIndex = e.target.innerText === 'Position' ? 1 : 0;
      const first = a.children[cellIndex].innerText;
      const second = b.children[cellIndex].innerText;

      return first.localeCompare(second);
    }
  });

  for (let i = 0; i < sort.length; i++) {
    let newTr = document.createElement('tr');

    newTr = sort[i];
    info.append(newTr);
  }
});
