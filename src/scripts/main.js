'use strict';

const header = document.querySelectorAll('table>thead>tr>th');

for (let i = 0; i < header.length; i++) {
  header[i].addEventListener('click', () => {
    const tbody = document.querySelector('tbody');
    const rows = Array.from(tbody.rows);

    rows.sort((a, b) => {
      const aPos = a.cells[i].textContent.trim();
      const bPos = b.cells[i].textContent.trim();

      if (aPos[0].trim() === '$') {
        const aNum = parseFloat(aPos.trim().slice(1));
        const bNum = parseFloat(bPos.trim().slice(1));

        if (!isNaN(aNum) && !isNaN(bNum)) {
          return aNum - bNum;
        }
      }

      return aPos.localeCompare(bPos);
    });

    for (const row of rows) {
      tbody.append(row);
    }
  });
}
