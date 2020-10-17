'use strict';

const list = document.querySelector('tbody');

const listHeader = [ ...document.querySelectorAll('th') ];
// console.log(listHeader)
listHeader.map((item, index) => {
  // debugger
  item.addEventListener('click', () => {
    const rows = [ ...list.querySelectorAll('tr') ];

    rows.sort((a, b) => {
      const itemA = a.children[index].innerText.replace(/[^A-Z0-9]/gi, '');
      const itemB = b.children[index].innerText.replace(/[^A-Z0-9]/gi, '');

      if (!isNaN(itemA)) {
        return (+itemA) - (+itemB);
      }

      return itemA.localeCompare(itemB);
    });

    list.append(...rows);
  });
});
