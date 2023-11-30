'use strict';

const QUERY = {
  'Name': 0,
  'Position': 1,
  'Age': 2,
  'Salary': 3,
};

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const employees = tbody.children;

function sortEmployees(query) {
  if (query < 2) {
    return [...employees].sort((em1, em2) =>
      em1.children[query].innerText
        .localeCompare(em2.children[query].innerText),
    );
  } else if (query === 2) {
    return [...employees].sort((em1, em2) =>
      +em1.children[query].innerText
      - +em2.children[query].innerText,
    );
  } else {
    return [...employees].sort((em1, em2) =>
      getNumberSalary(em1.children[query].innerText)
      - getNumberSalary(em2.children[query].innerText),
    );
  }
}

function getNumberSalary(salary) {
  return +salary.slice(1).replaceAll(',', '');
}

function printNewTable(newEmployees) {
  tbody.innerHTML = '';

  newEmployees.forEach(emp => tbody.append(emp));
}

thead.addEventListener('click', e => {
  const query = e.target.innerText;

  const newEmployees = sortEmployees(QUERY[query]);

  printNewTable(newEmployees);
});
