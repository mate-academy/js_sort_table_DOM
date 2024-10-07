'use strict';

import drawEmployeeView from './employeeView';
import employees from './getEmployeesData';

import {
  sortByAge,
  sortByName,
  sortByPosition,
  sortBySalary,
} from './sortEmployees';

const theads = document.querySelectorAll('thead tr');

theads.forEach((thead) => {
  thead.addEventListener('click', (e) => {
    const type = e.target.textContent.toLowerCase();

    switch (type) {
      case 'name':
        return drawEmployeeView(sortByName(employees));
      case 'position':
        return drawEmployeeView(sortByPosition(employees));
      case 'age':
        return drawEmployeeView(sortByAge(employees));
      case 'salary':
        return drawEmployeeView(sortBySalary(employees));

      default:
        throw new Error('Wrong type!');
    }
  });
});
