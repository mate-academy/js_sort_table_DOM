'use strict';

const header = document.querySelector('thead');

const head = header.innerText.match(/\w+/g);

const rows = document.querySelector('tbody');

const people = rows.querySelectorAll('tr');

const sortArray = [...people];

let previus = '';

header.addEventListener('click', (event) => {
  for (let i = 0; i < head.length; i++) {
    if (previus) {
      previus.style.color = '#fff';
    };
    previus = event.target;
    event.target.style.color = '#fff400';

    if (event.target.textContent === head[i]) {
      if (/[0-9]/.test(sortArray[0].children[i].textContent)) {
        sortArray.sort((a, b) =>
          Number(a.children[i].textContent.replace(/[^0-9]/g, ''))
          - Number(b.children[i].textContent.replace(/[^0-9]/g, '')));
      } else {
        sortArray.sort((a, b) =>
          a.children[i].textContent.localeCompare(b.children[i].textContent));
      }
    }
  }

  let j = 0;

  while (sortArray.length > j) {
    people[j].innereHTML = '';
    rows.append(sortArray[j]);
    j++;
  }
});
