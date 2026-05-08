'use strict';

// write code here

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');

tHead.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'TH') {
    return null;
  }

  const th = e.target;
  const columnIndex = th.cellIndex;

  const rowsToSort = Array.from(tBody.rows);

  rowsToSort.sort((a, b) => {
    const contentA = a.cells[columnIndex].textContent.trim();
    const contentB = b.cells[columnIndex].textContent.trim();

    // Метод .replace(/[^0-9.-]+/g, '')
    // сканує вхідний рядок. Регулярний вираз знаходить будь-який символ,
    // який НЕ (^) є цифрою (0-9), крапкою (.) або мінусом (-).

    //  Глобальний прапорець (g) гарантує, що пошук відбувається по всьому рядку
    // Метод замінює
    // ці знайдені нечислові символи на порожній рядок '', фактично видаляючи їх
    const maybeNum = parseFloat(contentA.replace(/[^0-9.-]+/g, ''));
    const maybeNum2 = parseFloat(contentB.replace(/[^0-9.-]+/g, ''));

    if (!isNaN(maybeNum) && !isNaN(maybeNum2)) {
      return maybeNum - maybeNum2;
    }

    return contentA.localeCompare(contentB);
  });

  tBody.append(...rowsToSort);
});
