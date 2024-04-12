'use strict';

const table = document.querySelector('tbody');
const data = document.querySelectorAll('tbody tr');
const thead = document.querySelectorAll('thead th');

thead.forEach((title) => {
  title.addEventListener('click', sorting);
});

function sorting(e) {
  const targetIndex = [...thead].indexOf(e.target);

  const sortedData = [...data].sort((a, b) => {
    const dataA = a.children[targetIndex].textContent;
    const dataB = b.children[targetIndex].textContent;

    if (dataA[0] === '$' || !isNaN(+dataA)) {
      return (
        parseFloat(dataA.replace(/\D/g, '')) -
        parseFloat(dataB.replace(/\D/g, ''))
      );
    }

    return dataA.localeCompare(dataB);
  });

  table.append(...sortedData);
}
