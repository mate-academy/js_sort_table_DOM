'use strict';

// write code here
const headers = document.querySelector('thead').querySelectorAll('th');

for (const header of headers) {
  header.addEventListener('click', () => {
    const rows = Array.from(
      document.querySelector('tbody').querySelectorAll('tr'),
    );
    const index = header.cellIndex;

    rows.sort((a, b) => {
      const aText = a.children[index].textContent;
      const bText = b.children[index].textContent;
      const collator = new Intl.Collator('en-US', { numeric: true });

      switch (index) {
        case 0:
        case 1:
          return aText.localeCompare(bText);
        case 2:
          return aText - bText;
        case 3:
          return collator.compare(aText, bText);
      }
    });

    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
}
