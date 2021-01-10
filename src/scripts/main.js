'use strict';

const tableBody = document.querySelector('tbody');
const people = [...document.querySelectorAll('tbody tr')];
const header = document.querySelector('thead tr');

header.addevListener('click', (ev) => {
  const cellIndex = [...header.children].indexOf(ev.target);

  const sorted = people.sort((a, b) => {
    function formateText(item) {
      return item.children[cellIndex].innerText.replace(/[$,]/g, '');
    };

    const first = formateText(a);
    const second = formateText(b);

    if (isNaN(+first)) {
      return first.localeCompare(second);
    };

    return first - second;
  });

  tableBody.append(...sorted);
});
