'use strict';

function convertCurrencyToNumber(value) {
  return +value.slice(1).split(',').join('');
}

function sortList(list, index) {
  const result = [...list.children].sort((a, b) => {
    if (index === 3) {
      const valueA = convertCurrencyToNumber(a.children[index].innerText);
      const valueB = convertCurrencyToNumber(b.children[index].innerText);

      return valueA - valueB;
    }

    const value1 = a.children[index].innerText;
    const value2 = b.children[index].innerText;

    return value1.localeCompare(value2);
  });

  list.append(...result);
}

addEventListener('click', e => {
  const tableHeaders = document.querySelector('thead').children[0].children;
  const tableFooter = document.querySelector('tfoot');
  const i = [...tableHeaders].findIndex(
    element => element.innerText === e.target.innerText
    && !tableFooter.contains(e.target));

  if (i === -1) {
    return;
  }

  const tableBody = document.querySelector('tbody');

  sortList(tableBody, i);
});
