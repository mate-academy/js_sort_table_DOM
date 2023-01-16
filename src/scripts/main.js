'use strict';

let colNames = [...document.querySelector('tr').querySelectorAll('th')]
  .forEach(el => {
    el.className = el.innerText;
  });

colNames = [...document.querySelector('tr')
  .querySelectorAll('th')].map(el => el.innerText);

const people = [...document.querySelector('tbody')
  .querySelectorAll('tr')].map(el => el.innerText.split('\t'));

document.addEventListener('click', e => {
  for (let i = 0; i < colNames.length; i++) {
    if (colNames[i] === e.target.className) {
      if (Number(people[0][i].replace(/[^0-9]/g, '')) > 0) {
        people.sort((a, b) => Number(a[i].replace(/[^a-zа-яё0-9\s]/gi, ''))
          - Number(b[i].replace(/[^a-zа-яё0-9\s]/gi, '')));
      } else {
        people.sort((a, b) => a[i].localeCompare(b[i]));
      }
    }
  }

  const peopleTD = people.flat();

  const cells = document.querySelectorAll('td');

  for (let i = 0; i < peopleTD.length; i++) {
    cells[i].innerText = peopleTD[i];
  }
});
