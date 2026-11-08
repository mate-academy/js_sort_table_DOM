'use strict';

// write code here

const tbody = document.querySelector('tbody');
const th = document.querySelectorAll('th');

th.forEach((item, i) => {
  item.addEventListener('click', () => {
    const text = item.textContent;
    const tr = tbody.querySelectorAll('tr');

    const sortItems = [...tr].sort((tr1, tr2) => {
      const td1 = tr1.querySelectorAll('td');
      const td2 = tr2.querySelectorAll('td');

      if (text === 'Name' || text === 'Position') {
        return td1[i].textContent.localeCompare(td2[i].textContent);
      }

      if (text === 'Age') {
        return +td1[i].textContent - +td2[i].textContent;
      }

      if (text === 'Salary') {
        const tdNumber1 = conversionToANumber(td1[i].textContent);
        const tdNumber2 = conversionToANumber(td2[i].textContent);

        return tdNumber1 - tdNumber2;
      }
    });

    sortItems.forEach((sortItem) => {
      tbody.append(sortItem);
    });
  });
});

function conversionToANumber(number) {
  return +number.slice(1).replaceAll(',', '');
}
