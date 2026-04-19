'use strict';

// шукаємо всі заголовки таблиці (<th>), щоб повісити на них подію кліку
const titleColumns = document.querySelectorAll('thead th');

titleColumns.forEach((th) => {
  // дод. слухач події кліку для кожного конкретного заголовка стовпця
  th.addEventListener('click', () => {
    // отримали всі рядки даних (<tr>) з тіла таблиці (<tbody>)
    const rows = document.querySelectorAll('tbody tr');

    // Перетворюємо NodeList у справжній масив, щоб став доступним метод .sort()
    const rowsArray = Array.from(rows);

    // сортуємо масив за правилами, що всередині
    rowsArray.sort((a, b) => {
      // отримуємо текст із клітинки поточного стовпця
      // (використовуємо cellIndex)
      // .trim() видаляє зайві пробіли, щоб вони не впливали на порівняння
      const cellA = a.cells[th.cellIndex].textContent.trim();
      const cellB = b.cells[th.cellIndex].textContent.trim();
      // 2. Спеціальна обробка для грошових значень (Salary)
      // Видаляємо "$" та ",", щоб перетворити "$162,700" на "162700"
      const cleanA = cellA.replace(/[$,]/g, '');
      const cleanB = cellB.replace(/[$,]/g, '');

      // перевірка чи є вміст обох клітинок числами (не NaN і не порожні)
      if (!isNaN(cleanA) && !isNaN(cleanB) && cleanA !== '' && cleanB !== '') {
        // якщо - числа, порівнюємо їх математично (віднімаємо одне від одного)
        return parseFloat(cleanA) - parseFloat(cleanB);
      }

      // Якщо текст=> використовуємо метод для алфавітного порівняння
      return cellA.localeCompare(cellB);
    });

    // знаходимо <tbody>. туди ми будемо повертати відсортовані рядки
    const tbody = document.querySelector('tbody');

    // проходимо по відсортованому масиву і додаємо кожен рядок назад у таблицю
    rowsArray.forEach((row) => {
      // .append() автоматично переміщує існуючий рядок у кінець списку <tbody>
      tbody.append(row);
    });
  });
});
