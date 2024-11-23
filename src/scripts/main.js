'use strict';

const tHeadTags = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

tHeadTags.forEach((tag, thIndex) => {
  tag.addEventListener('click', () => {
    const numberOfPosition = thIndex; // Отримуємо індекс заголовка
    const values = []; // Масив для збереження значень

    rows.forEach((row) => {
      const cells = row.querySelectorAll('td'); // Всі <td> у рядку

      if (cells[numberOfPosition]) {
        values.push({
          value: cells[numberOfPosition].textContent.trim(), // Значення комірки
          row, // Зберігаємо посилання на рядок
        });
      }
    });

    const sortedValues = values.sort((a, b) => {
      if (!isNaN(a.value) && !isNaN(b.value)) {
        return Number(a.value) - Number(b.value);
      } else {
        return a.value.localeCompare(b.value);
      }
    });

    tbody.innerHTML = '';
    sortedValues.forEach(({ row }) => tbody.appendChild(row));
  });
});
