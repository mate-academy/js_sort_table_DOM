'use strict';

// write code here

const tableHeadings = document.querySelectorAll('th');

function tryParseNumber(raw) {
  const cleaned = raw
    .replace(/\s/g, '')
    .replace(',', '.')
    .replace(/[^\d.-]/g, '');
  const n = parseFloat(cleaned);

  return Number.isNaN(n) ? null : n;
}

tableHeadings.forEach((heading) => {
  heading.addEventListener('click', () => {
    const columnIndex = Array.from(heading.parentNode.children).indexOf(
      heading,
    );
    const tbody = document.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const rawA = a.children[columnIndex].textContent.trim() || '';
      const rawB = b.children[columnIndex].textContent.trim() || '';

      const numA = tryParseNumber(rawA);
      const numB = tryParseNumber(rawB);

      if (numA !== null && numB !== null) {
        return numA - numB;
      }

      return rawA.localeCompare(rawB, 'uk', { numeric: true });
    });
    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});
