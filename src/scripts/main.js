'use strict';

const th = document.querySelectorAll('th');

for (const key of th) {
  key.addEventListener('click', (events) => {
    events.preventDefault();

    const index = events.target.cellIndex;
    const tr = document.querySelectorAll('tbody tr');

    const masiv = [...tr];
    const tbody = document.querySelector('tbody');

    masiv.sort((a, b) => {
      const textA = a.cells[index].textContent.trim();
      const textB = b.cells[index].textContent.trim();
      const numA = parseFloat(textA.replace(/[^0-9.-]/g, ''));
      const numB = parseFloat(textB.replace(/[^0-9.-]/g, ''));

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }

      return textA.localeCompare(textB);
    });

    for (const row of masiv) {
      tbody.appendChild(row);
    }
  });
}
