'use strict';

const head = document.querySelector('thead');
const sortedElements = [...document.querySelectorAll('tbody tr')];

head.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  getSortedList(index, (index === 3));
});

function getSortedList(i, format) {
  sortedElements.sort((a, b) => {
    let first = a.children[i].innerText;
    let second = b.children[i].innerText;

    if (format) {
      first = formatData(first);
      second = formatData(second);
    }

    if (!isNaN(first)) {
      return first - second;
    }

    return first.localeCompare(second);
  });

  sortedElements[0].parentElement.append(...sortedElements);
}

function formatData(text) {
  return text.split('').filter(el => '0123456789'.includes(el)).join('');
}
