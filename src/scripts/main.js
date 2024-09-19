const listHead = document.querySelector('thead');
const actualyEmplList = [
  ...document.querySelector('tbody').querySelectorAll('tr'),
];

listHead.addEventListener('click', (e) => {
  const target = e.target;
  let result;

  const ulElement = document.querySelector('tbody');

  const list = actualyEmplList.map((employee) => {
    let namee;

    switch (target.textContent) {
      case 'Name':
        namee = employee.children[0].textContent;
        break;
      case 'Position':
        namee = employee.children[1].textContent;
        break;
      case 'Age':
        namee = employee.children[2].textContent;
        break;
      case 'Salary':
        namee = Number(employee.children[3].textContent.replace(/\$|,/g, ''));
        break;
    }

    return {
      employeeElement: employee,
      name: namee,
    };
  });

  switch (target.textContent) {
    case 'Name':
      result = sortListbyName(list);
      break;
    case 'Position':
      result = sortListbyPosition(list);
      break;
    case 'Age':
      result = sortListbyAge(list);
      break;
    case 'Salary':
      result = sortListbySalary(list);
      break;
  }

  list.forEach((employee) => {
    ulElement.appendChild(employee.employeeElement);
  });

  result.map((employee) => employee.employeeElement);
});

function sortListbyName(list) {
  list.sort((a, b) => a.name.localeCompare(b.name));

  return list;
}

function sortListbyPosition(list) {
  list.sort((a, b) => a.name.localeCompare(b.name));

  return list;
}

function sortListbyAge(list) {
  list.sort((a, b) => a.name - b.name);

  return list;
}

function sortListbySalary(list) {
  list.sort((a, b) => a.name - b.name);

  return list;
}
