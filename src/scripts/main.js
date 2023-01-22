'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const tableTitle = document.querySelector('table thead');
  const tablePeople = document.querySelector('table tbody');

  function sortElement(list, index) {
    return list.sort((x, y) => {
      const parsedX = x.children[index].textContent.replace(/\W/g, '');
      const parsedY = y.children[index].textContent.replace(/\W/g, '');

      if (!isNaN(parsedX)) {
        return parsedX - parsedY;
      }

      return parsedX.localeCompare(parsedY);
    });
  }

  tableTitle.addEventListener('click', e => {
    const { target } = e;

    if (target.tagName === 'TH') {
      const newArr = sortElement([...tablePeople.children], target.cellIndex);

      tablePeople.innerHTML = '';

      newArr.forEach(el => {
        tablePeople.append(el);
      });
    }
  });
});
