'use strict';

const thead = document.body.querySelector('thead');
const titles = [ ...thead.querySelectorAll('th') ];
const tbody = document.body.querySelector('tbody');
const people = [ ...tbody.rows ];

titles.forEach(title => title.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  people.sort((a, b) => {
    const aText = a.cells[index].textContent;
    const bText = b.cells[index].textContent;

    if (e.target.textContent === 'Age') {
      return Number(aText) - Number(bText);
    }

    if (e.target.textContent === 'Salary') {
      const aSalary = Number(aText.replace(/[$,]/g, ''));
      const bSalary = Number(bText.replace(/[$,]/g, ''));

      return aSalary - bSalary;
    } else {
      return aText.localeCompare(bText);
    }
  });

  people.forEach(person => tbody.append(person));
}));
