'use strict';

// const headerItems = document.querySelectorAll('thead th');
// const tableRows = document.querySelectorAll('tbody tr');
// const table = document.querySelector('tbody');

// function sort(item) {
//   const itemIndex = [...headerItems].indexOf(item.target);

//   const sortedTable = [...tableRows].sort((row1, row2) => {
//     const textRowA = row1.children[itemIndex].innerText;
//     const textRowB = row2.children[itemIndex].innerText;

//     if (textRowA.includes('$') || !isNaN(+textRowA)) {
//       return (
//         parseInt(textRowA.replace(/\D/g, '')) -
//         parseInt(textRowB.replace(/\D/g, ''))
//       );
//     }

//     return textRowA.localeCompare(textRowB);
//   });

//   table.append(...sortedTable);
// }

// headerItems.forEach((headerItem) => {
//   headerItem.addEventListener('click', sort);
// });

const headerItems = document.querySelectorAll('thead th');
const tableRows = document.querySelectorAll('tbody tr');
const table = document.querySelector('tbody');

headerItems.forEach((headerItem) => {
  headerItem.addEventListener('click', (item) => {
    const itemIndex = [...headerItems].indexOf(item.target);

    const sortedTable = [...tableRows].sort((row1, row2) => {
      const contentRow1 = row1.children[itemIndex].innerText;
      const contentRow2 = row2.children[itemIndex].innerText;

      if (contentRow1.includes('$')) {
        return (
          +contentRow1.replace(',', '').slice(1) -
          +contentRow2.replace(',', '').slice(1)
        );
      }

      return contentRow1.localeCompare(contentRow2);
    });

    table.append(...sortedTable);
  });
});
