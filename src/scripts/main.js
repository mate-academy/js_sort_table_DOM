'use strict';
// витягнув елемент 
const table = document.querySelector('tbody');
const th = document.querySelectorAll('th');



th.forEach((thItem, thIndex) => {
  thItem.addEventListener('click', () => {
    //перетворюю на масив
    const rows = Array.from(table.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const cellA = a.cells[thIndex].textContent.trim();
      const cellB = b.cells[thIndex].textContent.trim();

      // ось тут перетворюю текст на число через parseFloat
      const numA = parseFloat(cellA);
      const numB = parseFloat(cellB);

      //isNaN(value) повертає true, якщо змінна не число
      /*!isNaN(value) = true якщо значення — число */

      const isNumberA = !isNaN(numA);
      const isNumberB = !isNaN(numB);
      
      // Якщо обидва значення числа → сортуємо числово
      if (isNumberA && isNumberB) {
        return numA - numB;
      }

      // Інакше сортуємо як строки
      return cellA.localeCompare(cellB);
    });

    // Очищаємо tbody та додаємо нові рядки
    table.innerHTML = '';
    rows.forEach(row => table.appendChild(row));
  });
});
