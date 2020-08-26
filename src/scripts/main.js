'use strict';

const people = [...document.querySelectorAll('tbody tr')];
const heading = document.querySelector('thead tr');

heading.addEventListener('click', (event) => {
  const index = [...heading.children].indexOf(event.target);

  const sorted = people.sort((a, b) => {
    const first = a.children[index].innerText.replace(/[$,]/g, '');
    const second = b.children[index].innerText.replace(/[$,]/g, '');

    if (isNaN(+first)) {
      return first.localeCompare(second);
    }

    return first - second;
  });

  document.querySelector('tbody').append(...sorted);
});
