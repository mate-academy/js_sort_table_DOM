'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelectorAll('thead th');
  const tbody = document.querySelector('tbody');

  header.forEach((title, index) => {
    title.addEventListener('click', () => {
      const row = Array.from(tbody.querySelectorAll('tr'));

      row.sort((value1, value2) => {
        const string1 = value1.children[index].textContent.trim();
        const string2 = value2.children[index].textContent.trim();

        const number1 = parseFloat(string1.replace(/[$,]/g, ''));
        const number2 = parseFloat(string2.replace(/[$,]/g, ''));

        if (!isNaN(number1)) {
          return number1 - number2;
        }

        return string1.localeCompare(string2);
      });

      row.forEach((value) => tbody.appendChild(value));
    });
  });
});
