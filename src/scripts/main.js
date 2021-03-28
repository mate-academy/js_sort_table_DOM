'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tr = document.querySelectorAll('tbody tr');

function converterToNumber(str) {
  return str.replace('$', '').replace(',', '');
}

thead.addEventListener('click', (e) => {
  const sortedList = [...tr].sort((first, second) => {
    const firstResult = first.children[e.target.cellIndex].innerText;
    const secondResult = second.children[e.target.cellIndex].innerText;

    if (!isNaN(converterToNumber(firstResult))) {
      return converterToNumber(firstResult) - converterToNumber(secondResult);
    } else {
      return firstResult.localeCompare(secondResult);
    }
  });

  tbody.append(...sortedList);
});
