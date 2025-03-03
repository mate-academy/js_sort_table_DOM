'use strict';

const table = document.querySelector('tbody');
const columns = Array.from(document.querySelectorAll('thead th'));

for (let i = 0; i < columns.length; i++) {
  columns[i].addEventListener('click', () => {
    const bodyTrs = Array.from(document.querySelectorAll('tbody tr'));
    const sortedTrs = bodyTrs.sort((firstItem, secondItem) => {
      const firstText = firstItem.children[i].textContent;
      const secondText = secondItem.children[i].textContent;

      if (firstText.includes('$')) {
        const firstSalary = formatSalary(firstText);
        const secondSalary = formatSalary(secondText);

        return compareSalary(firstSalary, secondSalary);
      }

      return firstText.localeCompare(secondText);
    });

    table.innerHTML = '';
    sortedTrs.forEach((tr) => table.append(tr));
  });
}

function formatSalary(string) {
  let result = '';

  for (const ch of string) {
    if ('0123456789'.includes(ch)) {
      result += ch;
    }
  }

  return result;
}

function compareSalary(a, b) {
  if (a - b > 0) {
    return 1;
  } else if (a - b < 0) {
    return -1;
  }

  return 0;
}
