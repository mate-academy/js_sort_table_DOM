'use strict';

// Находим таблицу и ее заголовок и тело
const table = document.querySelector('table');
const tableHead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');

// Назначаем обработчик события "click" на заголовок таблицы
tableHead.addEventListener('click', e => {
  // Получаем индекс ячейки, на которую было нажато
  const index = e.target.cellIndex;

  // Сортируем строки в теле таблицы
  const sorted = [...tableBody.rows].sort((a, b) => {
    // Получаем текст ячеек a и b для сравнения
    const aText = a.cells[index].innerText;
    const bText = b.cells[index].innerText;

    // В зависимости от индекса ячейки, сравниваем ячейки a и b
    switch (index) {
      case 0:
      case 1: // Для первых двух колонок - сортировка по алфавиту
        return aText.localeCompare(bText);
      case 2: // Для третьей колонки - сортировка по числовому значению
        return +aText - +bText;
      case 3: // Для четвертой колонки - сортировка по числовому значению
      //  без символов, не являющихся буквами и цифрами
        return +aText.replace(/\W/g, '') - +bText.replace(/\W/g, '');
    }
  });

  // Добавляем отсортированные строки обратно в тело таблицы
  tableBody.append(...sorted);
});
