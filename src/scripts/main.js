'use strict';

const people = [...document.querySelectorAll('tbody tr')];
const head = document.querySelector('thead tr');

head.addEventListener('click', (event) => {
  const index = [...head.children].indexOf(event.target);

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
