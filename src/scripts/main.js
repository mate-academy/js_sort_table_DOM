'use strict';

function transformToNumber(str) {
  return +str.replace(',', '').slice(1);
}

const tbody = document.querySelector('tbody');
const title = document.querySelector('thead');
const rows = [...tbody.querySelectorAll('tr')];

title.addEventListener('click', (e) => {
  // получаю заголовк хедер по якому клікнув
  const value = e.target.closest('th').textContent.toLowerCase();
  // получаю індекс заголовка cellIndex
  const titleIndex = e.target.cellIndex;
  // сортуємо і треба мати на увазі що ми сортуємо
  // дом елементи по значеннях, ми лише переставляємо елементи
  const newRows = rows.sort((a, b) => {
    const cellsA = a.cells[titleIndex].textContent;
    const cellsB = b.cells[titleIndex].textContent;

    switch (value) {
      case 'name':
      case 'position':
        return cellsA.localeCompare(cellsB);

      case 'age':
        return cellsA - cellsB;

      case 'salary':
        return transformToNumber(cellsA) - transformToNumber(cellsB);

      default:
        return null;
    }
  });

  tbody.innerHTML = '';

  newRows.forEach((item) => {
    tbody.appendChild(item);
  });
});
