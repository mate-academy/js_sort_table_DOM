'use strict';

const thead = document.querySelector('thead');
const headlinesBox = thead.firstElementChild;
const tbody = document.querySelector('tbody');
const tbodyChildren = [...tbody.children];

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const index = [...headlinesBox.children].indexOf(th);

  const sorted = tbodyChildren.sort((a, b) => {
    const elementA = a.children[index].textContent;
    const elementB = b.children[index].textContent;
    const type = detectType(elementB);

    if (type === 'String') {
      return elementA.localeCompare(elementB);
    }

    if (type === 'Currency') {
      return +elementA.replace(/[$,]/g, '') - +elementB.replace(/[$,]/g, '');
    }

    if (type === 'Number') {
      return Number(elementA) - Number(elementB);
    }
  });

  tbody.innerHTML = '';
  sorted.forEach((el) => tbody.append(el));
});

function detectType(value) {
  if (/^\d+(\.\d+)?$/.test(value.trim())) {
    return 'Number';
  }

  if (
    value.startsWith('$') &&
    !isNaN(Number(value.slice(1).replace(/,/g, '')))
  ) {
    return 'Currency';
  }

  return 'String';
}
