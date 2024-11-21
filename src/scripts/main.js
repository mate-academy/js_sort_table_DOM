'use strict';

const tBody = document.querySelector('tbody');
const headers = document.querySelectorAll('thead th');
const trList = [...tBody.children];

const sortFn = (list, num) => {
  return list.sort((a, b) => {
    const aText = a.children[num].textContent;
    const bText = b.children[num].textContent;

    return aText.localeCompare(bText);
  });
};

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const sortedList = sortFn(trList, index);

    sortedList.forEach((row) => tBody.appendChild(row));
  });
});
