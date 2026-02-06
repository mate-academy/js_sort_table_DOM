'use strict';

const tbody = document.querySelector('tbody');
const titles = document.querySelectorAll('thead th');

titles.forEach((title, index) => {
  title.addEventListener('click', () => {
    // беремо рядки тільки з tbody
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const textA = a.children[index].textContent.trim();
      const textB = b.children[index].textContent.trim();

      // спробуємо перетворити в число (для Age або Salary)
      const valueA = parseFloat(textA.replace(/[$,]/g, ''));
      const valueB = parseFloat(textB.replace(/[$,]/g, ''));

      if (!isNaN(valueA) && !isNaN(valueB)) {
        return valueA - valueB; // сортування чисел
      }

      // якщо це текст, сортуємо алфавітно
      return textA.localeCompare(textB);
    });

    // додаємо рядки у tbody у новому порядку
    rows.forEach((row) => tbody.appendChild(row));
  });
});
