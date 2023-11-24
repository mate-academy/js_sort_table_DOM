'use strict';

const filterBlock = document.querySelector('thead');
const filters = filterBlock.querySelectorAll('th');
const tableBody = document.querySelector('tbody');
const items = tableBody.querySelectorAll('tr');

filterBlock.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const filterIndex = [...filters].indexOf(e.target);

  const sorted = [...items].sort((a, b) => {
    const sortFieldA = a.children[filterIndex].innerText;
    const sortFieldB = b.children[filterIndex].innerText;

    if (!isNaN(sortFieldA) || sortFieldA[0] === '$') {
      return formatNum(sortFieldA) - formatNum(sortFieldB);
    }

    return sortFieldA.localeCompare(sortFieldB);
  });

  tableBody.append(...sorted);
});

function formatNum(str) {
  return Number(str.replace(/\D/g, ''));
}
