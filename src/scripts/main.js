'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const titles = thead.querySelectorAll('th');
const names = titles[0];
const position = titles[1];
const age = titles[2];
const salary = titles[3];

const employees = tbody.querySelectorAll('tr');

function sortByName([...list]) {
  list.sort((a, b) => {
    const nameA = a.firstElementChild.textContent;
    const nameB = b.firstElementChild.textContent;

    return nameA.localeCompare(nameB);
  });

  const parentList = list[0].parentNode;

  // Переміщуємо відсортовані елементи назад у батьківський елемент
  list.forEach((item) => {
    parentList.appendChild(item); // Переміщує елемент у нову позицію
  });
}

function sortByPosition([...list]) {
  list.sort((a, b) => {
    const positionA = a.children[1].textContent;
    const positionB = b.children[1].textContent;

    return positionA.localeCompare(positionB);
  });

  const parentList = list[0].parentNode;

  list.forEach((item) => {
    parentList.appendChild(item);
  });
}

function sortByAge([...list]) {
  list.sort((a, b) => {
    const ageA = Number(a.children[2].textContent);
    const ageB = Number(b.children[2].textContent);

    return ageA - ageB;
  });

  const parentList = list[0].parentNode;

  list.forEach((item) => {
    parentList.appendChild(item);
  });
}

function sortBySalary([...list]) {
  list.sort((a, b) => {
    const salaryA = Number(
      a.lastElementChild.textContent.replace(/[^0-9.-]+/g, ''),
    );
    const salaryB = Number(
      b.lastElementChild.textContent.replace(/[^0-9.-]+/g, ''),
    );

    return salaryA - salaryB;
  });

  const parentList = list[0].parentNode;

  list.forEach((item) => {
    parentList.appendChild(item);
  });
}

names.addEventListener('click', () => {
  sortByName(employees);
});

position.addEventListener('click', () => {
  sortByPosition(employees);
});

age.addEventListener('click', () => {
  sortByAge(employees);
});

salary.addEventListener('click', () => {
  sortBySalary(employees);
});
