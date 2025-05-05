'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const ths = document.querySelectorAll('thead th');
  const tbody = document.querySelector('tbody');

  ths.forEach((th, clickedIndex) => {
    th.addEventListener('click', () => {
      const currentDirection = th.dataset.direction || 'none';
      let nextDirection;

      if (currentDirection === 'asc') {
        nextDirection = 'desc';
      } else {
        nextDirection = 'asc'; // Default to asc if none or desc
      }

      ths.forEach((header, index) => {
        if (index === clickedIndex) {
          header.dataset.direction = nextDirection;
          // Оновлюємо візуальний стиль (приклад, можна адаптувати)
          header.style.backgroundColor = '#d14534';
          header.style.color = 'white';

          // Можна додати індикатори стрілок ▲ ▼
          header
            .querySelectorAll('.sort-indicator')
            .forEach((ind) => ind.remove()); // Видаляємо старі індикатори

          const indicator = document.createElement('span');

          indicator.classList.add('sort-indicator');
          indicator.textContent = nextDirection === 'asc' ? ' ▲' : ' ▼';
          header.appendChild(indicator);
        } else {
          delete header.dataset.direction;
          // Скидаємо стиль для неактивних заголовків
          header.style.backgroundColor = '';
          header.style.color = '';

          header
            .querySelectorAll('.sort-indicator')
            .forEach((ind) => ind.remove());
        }
      });

      const columnIndex = clickedIndex;
      const rowsArray = Array.from(tbody.querySelectorAll('tr'));

      rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.children[columnIndex];
        const valueA = cellA.textContent.trim();
        const cellB = rowB.children[columnIndex];
        const valueB = cellB.textContent.trim();

        let compareResult;

        if (columnIndex === 0 || columnIndex === 1) {
          compareResult = valueA.localeCompare(valueB);
        } else {
          const numA = parseFloat(valueA.replace(/[$,]/g, ''));
          const numB = parseFloat(valueB.replace(/[$,]/g, ''));

          if (isNaN(numA) && isNaN(numB)) {
            compareResult = 0;
          } else if (isNaN(numA)) {
            compareResult = 1; // Non-numbers go after numbers
          } else if (isNaN(numB)) {
            compareResult = -1; // Numbers go before non-numbers
          } else {
            compareResult = numA - numB;
          }
        }

        // Якщо напрямок 'desc', інвертуємо результат порівняння
        return nextDirection === 'desc' ? compareResult * -1 : compareResult;
      });

      tbody.innerHTML = '';

      rowsArray.forEach((row) => {
        tbody.appendChild(row);
      });
    });
  });
});
