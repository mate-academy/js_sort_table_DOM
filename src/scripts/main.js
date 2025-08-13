'use strict';

// write code here
const th = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');
const trArray = Array.from(tbody.querySelectorAll('tr'));

th.forEach((header, index) => {
  header.addEventListener('click', () => {
    const sortedRows = trArray
      .slice()
      .sort((a, b) => compareCells(a, b, index));

    tbody.append(...sortedRows);
  });
});

function compareCells(a, b, index) {
  const textA = a.children[index].textContent.trim();
  const textB = b.children[index].textContent.trim();

  if (index === 2) {
    return parseInt(textA) - parseInt(textB);
  } else if (index === 3) {
    const numA = parseInt(textA.replace(/\$|,/g, ''));
    const numB = parseInt(textB.replace(/\$|,/g, ''));

    return numA - numB;
  } else {
    return textA.localeCompare(textB);
  }
}
