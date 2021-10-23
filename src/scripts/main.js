'use strict';

const rows = document.querySelectorAll('tr');
const body = document.querySelector('tbody');
const bodyRows = body.querySelectorAll('tr');
const foot = document.querySelector('tfoot');
const haed = document.querySelector('thead');

for (const row of rows) {
  row.children[0].classList.add('name');
  row.children[1].classList.add('position');
  row.children[2].classList.add('age');
  row.children[3].classList.add('salary');
};

const sort = (e) => {
  switch (true) {
    case e.target.classList.contains('name'):
      const nameList = [...bodyRows].sort((a, b) => {
        const first = a.firstElementChild.innerText;
        const second = b.firstElementChild.innerText;

        return first.localeCompare(second);
      });

      for (const item of nameList) {
        body.append(item);
      };
      break;

    case e.target.classList.contains('position'):
      const positionList = [...bodyRows].sort((a, b) => {
        const first = a.children[1].innerText;
        const second = b.children[1].innerText;

        return first.localeCompare(second);
      });

      for (const item of positionList) {
        body.append(item);
      };
      break;

    case e.target.classList.contains('age'):
      const ageList = [...bodyRows].sort((a, b) => {
        return +a.children[2].innerText - +b.children[2].innerText;
      });

      for (const item of ageList) {
        body.append(item);
      };
      break;

    case e.target.classList.contains('salary'):
      const salaryList = [...bodyRows].sort((a, b) => {
        function GetNumSalary(item) {
          const element = item.children[3].innerText;

          return Number(element.slice(1).split(',').join(''));
        }

        return (GetNumSalary(a) - GetNumSalary(b));
      });

      for (const item of salaryList) {
        body.append(item);
      };
      break;
  }
};

foot.addEventListener('click', sort);
haed.addEventListener('click', sort);
