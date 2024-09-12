'use strict';

function sortBy(sortByWhat, sortCount) {
  const list = document.querySelectorAll('tbody tr');
  const arrOfList = [...list];

  arrOfList.sort((employee1, employee2) => {
    const employee1Text = employee1.cells[sortCount].textContent;
    const employee2Text = employee2.cells[sortCount].textContent;

    switch (sortByWhat) {
      case 'Name':
      case 'Position':
        return employee1Text.localeCompare(employee2Text);

      case 'Age':
        return +employee1Text - +employee2Text;

      case 'Salary':
        return (
          +employee1Text.replaceAll(/[$,]/g, '') -
          +employee2Text.replaceAll(/[$,]/g, '')
        );
    }
  });

  for (let i = 0; i < list.length; i++) {
    list[i].outerHTML = arrOfList[i].outerHTML;
  }
}

const thead = document.querySelector('thead tr');

thead.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    sortBy(e.target.textContent, e.target.cellIndex);
  }
});
