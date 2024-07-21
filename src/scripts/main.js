'use strict';

const thead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

thead.addEventListener('click', (evt) => {
  if (evt.target.tagName !== 'TH') {
    return;
  }

  const TYPES = ['name', 'position', 'age', 'salary'];

  const index = TYPES.indexOf(evt.target.textContent.toLowerCase());

  const sortRows = [...tableBody.children].sort((a, b) => {
    const valueA = a.children[index].textContent.toLowerCase();
    const valueB = b.children[index].textContent.toLowerCase();

    switch (index) {
      case 0:
      case 1:
        return valueA.localeCompare(valueB);
      case 2:
        return +valueA - +valueB;
      case 3:
        const formatted = (num) => +num.slice(1).split(',').join('');

        return formatted(valueA) - formatted(valueB);
      default:
        return 0;
    }
  });

  sortRows.forEach((row) => tableBody.append(row));
});
