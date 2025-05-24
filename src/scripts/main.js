'use strict';

const thead = document.querySelector('thead');

thead.addEventListener('click', (sort) => {
  if (sort.target.tagName !== 'TH') {
    return;
  }

  const headers = thead.querySelectorAll('th');
  const index = Array.from(headers).indexOf(sort.target);

  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  if (index === -1) {
    return;
  }

  rows.sort((a, b) => {
    const aText = a.children[index].textContent;
    const bText = b.children[index].textContent;

    const aClean = aText.replace(/\$|,/g, '');
    const bClean = bText.replace(/\$|,/g, '');

    if (!isNaN(Number(aClean)) && !isNaN(Number(bClean))) {
      return Number(aClean) - Number(bClean);
    } else {
      return aText.localeCompare(bText);
    }
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.appendChild(row));
});
