'use strict';

// Находим все заголовки таблицы
const titles = document.querySelector('thead').children[0].children;
const tr = document.querySelectorAll('tr');
const rows = [];

// Собираем строки таблицы (кроме заголовков)
tr.forEach((row) => {
  if (row.firstElementChild.tagName === 'TD') {
    rows.push(row);
  }
});

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', () => {
    // Сортируем строки по соответствующему столбцу
    rows.sort((person1, person2) => {
      const value1 = person1.children[i].textContent.trim();
      const value2 = person2.children[i].textContent.trim();

      // Проверяем, если это числовой столбец
      if (isOnlyLetters(value1) && isOnlyLetters(value2)) {
        // Для текстовых данных (например, Имя, Позиция)
        return value1.localeCompare(value2);
      } else {
        // Для числовых данных (например, Зарплата)
        return extractNumber(value1) - extractNumber(value2);
      }
    });

    // Вставляем отсортированные строки обратно в таблицу
    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';

    // Добавляем отсортированные строки в таблицу
    rows.forEach((row) => {
      tbody.appendChild(row);
    });
  });
}

// Функция для проверки, состоит ли строка только из букв
function isOnlyLetters(str) {
  return /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]+$/.test(str);
}

// Функция для извлечения чисел из строки
function extractNumber(str) {
  return parseFloat(str.replace(/\D/g, ''));
}
