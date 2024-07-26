'use strict';

// write code here
const tableContent = document.querySelector('table tbody');
const tableHead = document.querySelector('table thead');
const tableContentItems = [...tableContent.querySelectorAll('tr')];

const SORT_TYPES = {
  name: 'name',
  position: 'position',
  age: 'age',
  salary: 'salary',
};

const stringToDigit = (str) => {
  return +str.replaceAll(',', '').slice(1);
};

const TableColumn = (text) => {
  const component = document.createElement('td');

  component.textContent = text;

  return component;
};

const getEmployers = () => {
  const result = [];

  for (const employer of tableContentItems) {
    const [employerName, employerPosition, employerAge, employerSalary] =
      employer.children;

    result.push({
      name: employerName.textContent,
      position: employerPosition.textContent,
      age: +employerAge.textContent,
      salary: stringToDigit(employerSalary.textContent),
    });
  }

  return result;
};

const getSortedList = (sortType, list) => {
  switch (sortType) {
    case SORT_TYPES.name:
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case SORT_TYPES.position:
      return list.sort((a, b) => a.position.localeCompare(b.position));
    case SORT_TYPES.age:
      return list.sort((a, b) => a.age - b.age);
    case SORT_TYPES.salary:
      return list.sort((a, b) => a.salary - b.salary);
    default:
      return list;
  }
};

const sortList = (sortType) => {
  const employers = getEmployers();
  const sortedEmployes = getSortedList(sortType.toLowerCase(), employers);

  tableContent.innerHTML = '';

  for (const employer of sortedEmployes) {
    const tr = document.createElement('tr');

    tr.append(
      TableColumn(employer.name),
      TableColumn(employer.position),
      TableColumn(employer.age),
      TableColumn(`$${employer.salary.toLocaleString()}`),
    );

    tableContent.append(tr);
  }
};

tableHead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  sortList(e.target.textContent);
});
