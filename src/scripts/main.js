'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const data = [...tbody.children];

thead.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  data.sort((a, b) => {
    const contentA = a.cells[index].textContent;
    const contentB = b.cells[index].textContent;

    switch (index) {
      case 0 :
      case 1 : return contentA.localeCompare(contentB);
      case 2 : return contentA - contentB;
      case 3 : return parseInt(contentA.slice(1)) - parseInt(contentB.slice(1));
    }
  });
  tbody.append(...data);
});
