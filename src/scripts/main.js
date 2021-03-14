'use strict';

// write code here
const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
  const targetOnHead = e.target.innerText;
  const index = e.target.cellIndex;

  [...tbody.children].sort((a, b) => {
    if (targetOnHead === 'Age' || targetOnHead === 'Salary') {
      return +(a.cells[index].innerText.replace('$', '').replace(/,/g, '')) - +(
        b.cells[index].innerText.replace('$', '').replace(/,/g, ''));
    }

    return a.cells[index].innerText.localeCompare(
      b.cells[index].innerText);
  }).forEach(tag => tbody.append(tag));
});
