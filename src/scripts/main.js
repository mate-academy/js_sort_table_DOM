'use strict';

const getSalaryNumber = (str) =>
  Number(str.trim().split(',').join('').slice(1));

document.querySelector('thead').addEventListener('click', function(e) {
  const clicked = e.target;
  const type = clicked.textContent;
  const index = [...clicked.closest('tr').children].indexOf(clicked);

  const tableBody = document.querySelector('tbody');
  const tableData = [...tableBody.children];

  tableData.sort((a, b) => {
    const firstText = a.children[index].textContent;
    const secondText = b.children[index].textContent;

    switch (type) {
      case 'Position':
      case 'Name':
        return (firstText.localeCompare(secondText));
      case 'Age':
        return firstText - secondText;
      case 'Salary':
        return getSalaryNumber(firstText) - getSalaryNumber(secondText);
    };
  });
  tableBody.innerHTML = '';
  tableData.forEach(el => tableBody.append(el));
});
