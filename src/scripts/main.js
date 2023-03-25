'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tbodyRows = [...tbody.children];

function normalized(string) {
  let string1 = string;

  if (string1.includes('$')) {
    string1 = string.slice(1);
  }

  string1 = string1.split(',').join('');

  return string1;
}

thead.addEventListener('click', function(e) {
  const index = e.target.cellIndex;

  const sortElem = tbodyRows.sort((a, b) => {
    const nameA = a.children[index].innerText;
    const nameB = b.children[index].innerText;

    if (index === 0 || index === 1) {
      return (nameA).localeCompare(nameB);
    }

    return normalized(nameA) - normalized(nameB);
  });

  tbody.append(...sortElem);
});
