'use strict';

const headers = document.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const tBody = document.querySelector('tbody');
    const tRows = Array.from(tBody.querySelectorAll('tr'));

    tRows.sort((a, b) => {
      const firstParam = a.children[index].textContent.trim();
      const secondParam = b.children[index].textContent.trim();

      if (index === 0 || index === 1) {
        return firstParam.localeCompare(secondParam);
      }

      if (index === 2) {
        return firstParam - secondParam;
      }

      if (index === 3) {
        return (
          Number(firstParam.replace(/[$,]/g, '')) -
          Number(secondParam.replace(/[$,]/g, ''))
        );
      }
    });

    tBody.innerHTML = '';
    tRows.forEach((row) => tBody.appendChild(row));
  });
});