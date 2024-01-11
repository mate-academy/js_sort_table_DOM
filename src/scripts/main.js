'use strict';

const getSalary = salaryElement =>
  parseInt(salaryElement.innerText.slice(1).replace(',', ''));

const thead = document.querySelector('thead').children[0];

thead.addEventListener('click', e => {
  const target = e.target;

  if (target.tagName !== 'TH') {
    return;
  }

  const sortType = target.innerText;
  const data = Array.from(document.querySelectorAll('tbody tr'));

  const CASES = {
    name: 'Name',
    position: 'Position',
    age: 'Age',
    salary: 'Salary',
  };

  data.sort((a, b) => {
    switch (sortType) {
      case CASES.name:
      case CASES.position:
        const idxCases = {
          [CASES.name]: 0,
          [CASES.position]: 1,
        };
        const idx = idxCases[sortType];

        return a.children[idx].innerText.localeCompare(
          b.children[idx].innerText
        );

      case CASES.age:
        return a.children[2].innerText - b.children[2].innerText;

      case CASES.salary:
        return getSalary(a.children[3]) - getSalary(b.children[3]);

      default:
        return 0;
    }
  });

  document.querySelector('tbody').innerHTML = '';

  data.forEach(item => {
    document.querySelector('tbody').appendChild(item);
  });
});
