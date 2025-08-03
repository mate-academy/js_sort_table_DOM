'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const trBody = Array.from(tbody.querySelectorAll('tr'));
const ths = Array.from(thead.querySelectorAll('th'));

thead.addEventListener('click', (e) => {
  const clickedTh = e.target.closest('th');

  if (!clickedTh) {
    return;
  }

  const index = ths.indexOf(clickedTh);

  if (index === -1) {
    return;
  }

  trBody.sort((a, b) => {
    const aText = a.children[index].textContent;
    const bText = b.children[index].textContent;

    const aVal = isNaN(aText) ? aText : Number(aText);
    const bVal = isNaN(bText) ? bText : Number(bText);

    return aVal > bVal ? 1 : -1;
  });

  tbody.innerHTML = '';
  trBody.forEach((row) => tbody.appendChild(row));
});
