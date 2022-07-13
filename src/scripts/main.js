'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rowArray = [...tbody.children];

thead.addEventListener('click', (eventClick) => {
  if (!eventClick.target.tagName === 'TH') {
    return;
  };

  const targetIndex = eventClick.target.closest('th').cellIndex;

  const sortedArr = rowArray.sort((a, b) => {
    const first = a.children[targetIndex].innerText.replace(/[$,]/g, '');
    const second = b.children[targetIndex].innerText.replace(/[$,]/g, '');

    if (!isNaN(first)) {
      return first - second;
    };

    return first.localeCompare(second);
  });

  tbody.append(...sortedArr);
});
