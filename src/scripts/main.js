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

// document
//   .querySelector('thead')
//   .firstElementChild.children[0].addEventListener('click', () => {
//     const sortedList = sortFn(trList, 0);

//     sortedList.forEach((i) => tBody.appendChild(i));
//   });

// document
//   .querySelector('thead')
//   .firstElementChild.children[1].addEventListener('click', () => {
//     const sortedList = sortFn(trList, 1);

//     sortedList.forEach((i) => tBody.appendChild(i));
//   });

// document
//   .querySelector('thead')
//   .firstElementChild.children[2].addEventListener('click', () => {
//     const sortedList = sortFn(trList, 2);

//     sortedList.forEach((i) => tBody.appendChild(i));
//   });

// document
//   .querySelector('thead')
//   .firstElementChild.children[3].addEventListener('click', () => {
//     const sortedList = sortFn(trList, 3);

//     sortedList.forEach((i) => tBody.appendChild(i));
//     tBody.prepend(trList[trList.length - 1]);
//   });
