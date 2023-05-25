'use strict';

function conversion(value) {
  return +value
    .split('').slice(1).join('').split(',').join('');
}

addEventListener('click', e => {
  const sort = document.querySelector('thead').children[0].children;
  const cheak = document.querySelector('tfoot');
  const i = [...sort].findIndex(
    element => element.innerText === e.target.innerText
    && !cheak.contains(e.target));

  if (i === -1) {
    return;
  }

  const listValue = document.querySelector('tbody');

  function sortList(list) {
    const result = [...list.children].sort((a, b) => {
      if (i === 3) {
        const valueA = conversion(a.children[i].innerText);
        const valueB = conversion(b.children[i].innerText);

        return valueA - valueB;
      }

      const value1 = a.children[i].innerText;
      const value2 = b.children[i].innerText;

      return value1.localeCompare(value2);
    });

    listValue.append(...result);
  }

  sortList(listValue);
});
