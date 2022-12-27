'use strict';

// write code here

// const head = document.querySelector('thead');
// const body = document.querySelector('tbody');

// const copyBodyEl = [...body.children];

// head.addEventListener('click', (event) => {
//     const itemId = event.target.cellIndex;

//     const sort = copyBodyEl.sort((a, b) => {
//         const first = a.cells[itemId].textContent;
//         const second = b.cells[itemId].textContent;

//         // if (first.slice(0, 1) === '$') {
//         //     first = first.replace(/[^+\d]/g, '');
//         //     second = second.replace(/[^+\d]/g, '')

//         //     return first - second

//         // }

//         return first.localeCompare(second);
//     });

//     body.append(...sort);
// });

const head = document.querySelector('thead');
const body = document.querySelector('tbody');

const bodyChildren = [...body.children];

head.addEventListener('click', (event) => {
  const currentItem = event.target.cellIndex;

  console.log(currentItem);

  const sort = bodyChildren.sort((a, b) => {
    const first = a.cells[currentItem].textContent;
    const second = b.cells[currentItem].textContent;

    return first.localeCompare(second);
  });

  body.append(...sort);
});
