'use strict';

const table = document.querySelector('table');
const tHead = table.tHead;
const headings = [...tHead.rows[0].cells];
const tableBody = document.querySelector('tbody');
const workersData = () => [...table.tBodies[0].rows];

class Employee {
  constructor(fullName, position, age, salary) {
    this.name = fullName;
    this.position = position;
    this.age = +age;
    this.salary = this.getSalary(salary);
  }

  getSalary(str) {
    return +str.slice(1).split(',').join('');
  }
}

const employees = workersData().map(el => {
  const [fullName, position, age, salary] = getWorkerInfo([...el.cells]);

  return new Employee(fullName, position, age, salary);
});

tHead.addEventListener('click', (clickEvent) => {
  const target = clickEvent.target;
  const condition = target.innerText.toLowerCase();

  headings.forEach(el => {
    if (el === target) {
      el.style.color = '#fff400';
    } else {
      el.style.color = '#fff';
    }

    el.onmouseover = () => {
      el.style.color = '#fff400';
    };
  });

  tableBody.innerHTML = `
  ${sort(employees, condition).map(el => `
    <tr>
      <td>${el.name}</td>
      <td>${el.position}</td>
      <td>${el.age}</td>
      <td>${el.salary}</td>
    </tr>
  `).join('')}
  `;
});

function getWorkerInfo(workerData) {
  return workerData.map(el => el.innerText);
}

function sort(workers, value) {
  return workers.sort(
    ({ [value]: a }, { [value]: b }) => typeof a === 'string'
      ? a.localeCompare(b)
      : a - b
  );
}
