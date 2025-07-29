'use strict';

const tableBody = document.querySelector('tbody');

const sortByName = () => {
  const employers = document.querySelectorAll('tbody > tr');
  const sorted = Array.from(employers).sort((employer1, employer2) => {
    const name1 = employer1.children[0].textContent.trim();
    const name2 = employer2.children[0].textContent.trim();

    return name1.localeCompare(name2);
  });

  tableBody.innerHTML = '';

  for (const n of sorted) {
    tableBody.append(n);
  }
};

const sortByPosition = () => {
  const employers = document.querySelectorAll('tbody > tr');
  const sorted = Array.from(employers).sort((employer1, employer2) => {
    const position1 = employer1.children[1].textContent.trim();
    const position2 = employer2.children[1].textContent.trim();

    return position1.localeCompare(position2);
  });

  tableBody.innerHTML = '';

  for (const n of sorted) {
    tableBody.append(n);
  }
};

const sortByAge = () => {
  const employers = document.querySelectorAll('tbody > tr');
  const sorted = Array.from(employers).sort((employer1, employer2) => {
    const position1 = Number(employer1.children[2].textContent);
    const position2 = Number(employer2.children[2].textContent);

    return position1 - position2;
  });

  tableBody.innerHTML = '';

  for (const n of sorted) {
    tableBody.append(n);
  }
};

const sortBySalary = () => {
  const employers = document.querySelectorAll('tbody > tr');
  const sorted = Array.from(employers).sort((employer1, employer2) => {
    const position1 = employer1.children[3].textContent
      .replace('$', '')
      .replace(/,/g, '');
    const position2 = employer2.children[3].textContent
      .replace('$', '')
      .replace(/,/g, '');

    return Number(position1) - Number(position2);
  });

  tableBody.innerHTML = '';

  for (const n of sorted) {
    tableBody.append(n);
  }
};

document.addEventListener('click', (e) => {
  if (e.target.textContent === 'Name' && e.target.closest('thead')) {
    sortByName();
  } else if (e.target.textContent === 'Position' && e.target.closest('thead')) {
    sortByPosition();
  } else if (e.target.textContent === 'Age' && e.target.closest('thead')) {
    sortByAge();
  } else if (e.target.textContent === 'Salary' && e.target.closest('thead')) {
    sortBySalary();
  }
});
