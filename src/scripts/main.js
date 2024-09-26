'use strict';

const tabHead = document.querySelector('thead');
const tabBody = document.querySelector('tbody');
const rowArray = [...tabBody.children];

tabHead.addEventListener('click', (eventTab) => {
  if (!eventTab.target.tagName === 'TH') {
    return;
  };

  const targetIndex = eventTab.target.closest('th').cellIndex;

  const sortedArr = rowArray.sort((a, b) => {
    const first = a.children[targetIndex].innerText.replace(/[$,]/g, '');
    const second = b.children[targetIndex].innerText.replace(/[$,]/g, '');

    if (!isNaN(first)) {
      return first - second;
    };

    return first.localeCompare(second);
  });

  tabBody.append(...sortedArr);
});
