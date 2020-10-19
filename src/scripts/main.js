'use strict';

const people = [...document.querySelectorAll('tbody tr')];
const header = document.querySelector('thead tr');

header.addEventListener('click', (event) => {
  const index = [...header.children].indexOf(event.target);

  const sorted = people.sort((a, b) => {
    const first = a.children[index].innerText.replace(/[$,]/g, '');
    const second = b.children[index].innerText.replace(/[$,]/g, '');

    if (isNaN(+first)) {
      return first.localeCompare(second);
    };

    return first - second;
  });

  document.querySelector('tbody').append(...sorted);
});
