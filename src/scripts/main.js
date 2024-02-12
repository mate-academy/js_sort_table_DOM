'use strict';

const options = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');

options.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const clickedIndex = [...options.children].indexOf(e.target);
    const list = Array.from(tbody.querySelectorAll('tr'));

    const sortByNumbers = (a, b) => {
      return parseInt(a.children[clickedIndex]
        .textContent.replaceAll(/[$,]/g, ''))
      - parseInt(b.children[clickedIndex]
        .textContent.replaceAll(/[$,]/g, ''));
    };

    const sortByStrings = (a, b) => {
      return a.children[clickedIndex].textContent
        .localeCompare(b.children[clickedIndex].textContent);
    };

    clickedIndex < 2
      ? list.sort((a, b) => sortByStrings(a, b))
      : list.sort((a, b) => sortByNumbers(a, b));

    tbody.textContent = '';

    list.map(item => tbody.append(item));
  }
});
