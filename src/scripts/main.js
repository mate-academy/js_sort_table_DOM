'use strict';

// write code here

const thead = document.querySelectorAll('thead tr th');
const tbody = document.querySelector('tbody');
const tbodyArr = Array.from(tbody.querySelectorAll('tr'));

thead.forEach((item) => {
  item.addEventListener('click', (e) => {
    const columnIndex = [...thead].indexOf(e.target);

    tbodyArr.sort((a, b) => {
      const valueA = a.cells[columnIndex].textContent.trim();
      const valueB = b.cells[columnIndex].textContent.trim();

      // Перевіряємо, чи це числа
      const numA = parseFloat(valueA.replace(/[^0-9.-]+/g, '')) || valueA;
      const numB = parseFloat(valueB.replace(/[^0-9.-]+/g, '')) || valueB;

      // Порівняння чисел або тексту
      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }

      return numA
        .toString()
        .localeCompare(numB.toString(), undefined, { numeric: true });
    });

    tbody.innerHTML = '';
    tbody.append(...tbodyArr);
  });
});
