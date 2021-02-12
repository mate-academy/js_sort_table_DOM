'use strict';

const thead = document.querySelector('thead');
const headers = [...thead.querySelector('tr').querySelectorAll('th')];
const tbody = document.querySelector('tbody');
const data = [...tbody.querySelectorAll('tr')];

thead.addEventListener('click', (e) => {
  const item = e.target;

  if (item.tagName !== 'TH') {
    return;
  }

  const column = headers.findIndex((a) => item === a);

  data.sort((a, b) => {
    let first = [...a.querySelectorAll('td')][column].textContent;
    let second = [...b.querySelectorAll('td')][column].textContent;

    if (item.textContent === 'Salary') {
      first = first.split('$').join('').split(',').join('');
      second = second.split('$').join('').split(',').join('');

      return parseFloat(first) - parseFloat(second);
    }

    return first.localeCompare(second);
  });

  for (const a of data) {
    tbody.append(a);
  }
});
