'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

const listToSort = Array.from(tbody.getElementsByTagName('tr'));

const swithcers = thead.querySelectorAll('th');

swithcers[0].addEventListener('click', (e) => {
  listToSort.sort((first, second) => {
    const cellA = first.cells[0].textContent;
    const cellB = second.cells[0].textContent;

    return cellA.localeCompare(cellB);
  });

  tbody.innerHTML = '';
  listToSort.forEach((row) => tbody.appendChild(row));
});

swithcers[1].addEventListener('click', (e) => {
  listToSort.sort((first, second) => {
    const cellA = first.cells[1].textContent;
    const cellB = second.cells[1].textContent;

    return cellA.localeCompare(cellB);
  });

  tbody.innerHTML = '';
  listToSort.forEach((row) => tbody.appendChild(row));
});

swithcers[2].addEventListener('click', (e) => {
  listToSort.sort((first, second) => {
    const ageA = parseInt(first.cells[2].textContent);
    const ageB = parseInt(second.cells[2].textContent);

    return ageA - ageB;
  });

  tbody.innerHTML = '';
  listToSort.forEach((row) => tbody.appendChild(row));
});

swithcers[3].addEventListener('click', (e) => {
  listToSort.sort((first, second) => {
    let sellA = first.cells[3].textContent;
    let sellB = second.cells[3].textContent;

    sellA = sellA.replace(/\D/g, '');
    sellB = sellB.replace(/\D/g, '');

    return parseInt(sellA) - parseInt(sellB);
  });
  tbody.innerHTML = '';
  listToSort.forEach((row) => tbody.appendChild(row));
});
