'use strict';

const tbody = document.querySelector('tbody');

const personName = Array.from(tbody.querySelectorAll('td:nth-child(1)'));
const position = Array.from(tbody.querySelectorAll('td:nth-child(2)'));
const age = Array.from(tbody.querySelectorAll('td:nth-child(3)'));
const salary = Array.from(tbody.querySelectorAll('td:nth-child(4)'));

const thead = document.querySelector('thead');
const trHead = thead.querySelector('tr');

const headName = trHead.children[0];
const headPosition = trHead.children[1];
const headAge = trHead.children[2];
const headSalary = trHead.children[3];

function compare(a, b) {
  if (a.textContent < b.textContent) {
    return -1;
  }

  if (a.textContent > b.textContent) {
    return 1;
  }

  return 0;
}

headName.addEventListener('click', () => {
  personName.sort(compare);
  tbody.innerHTML = '';

  personName.forEach((element) => {
    tbody.appendChild(element.parentElement);
  });
});

headPosition.addEventListener('click', () => {
  position.sort(compare);
  tbody.innerHTML = '';

  position.forEach((element) => {
    tbody.appendChild(element.parentElement);
  });
});

headAge.addEventListener('click', () => {
  age.sort(compare);
  tbody.innerHTML = '';

  age.forEach((element) => {
    tbody.appendChild(element.parentElement);
  });
});

headSalary.addEventListener('click', () => {
  salary.sort((a, b) => {
    const x = parseFloat(a.textContent.replace(/[$,]/g, ''));
    const y = parseFloat(b.textContent.replace(/[$,]/g, ''));

    return x - y;
  });

  tbody.innerHTML = '';

  salary.forEach((element) => {
    tbody.appendChild(element.parentElement);
  });
});
