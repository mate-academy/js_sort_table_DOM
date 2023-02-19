'use strict';

// all needed variables

const body = document.querySelector('body');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];
const nameLength = 4;
const minAge = 18;
const maxAge = 90;
const timeoutOfMessage = 3000;
let compareIndex = -1;
let isValid;
let editingArea;
let isCorrect = true;

// table sorting

thead.addEventListener('click', eventClick => {
  const th = eventClick.target.closest('th');
  const index = th.cellIndex;

  sortTableAsc(index, th.innerText, compareIndex === index);

  compareIndex = (compareIndex === index) ? -1 : index;
});

function sortTableAsc(index, columnName, dscSorting) {
  rows.sort((first, second) => {
    const a = first.children[index].innerHTML;
    const b = second.children[index].innerHTML;

    switch (columnName) {
      case 'Name':
      case 'Position':
      case 'Office':
        return a.localeCompare(b);

      case 'Age':
        return a - b;

      case 'Salary':
        return normalizeNumber(a) - normalizeNumber(b);
    }
  });

  if (dscSorting) {
    rows.reverse();
  }

  tbody.append(...rows);

  function normalizeNumber(string) {
    return +string.slice(1).split(',').join('');
  }
}

// show active row

tbody.addEventListener('click', eventClick => {
  const tr = eventClick.target.closest('tr');

  rows.forEach(row => {
    row.removeAttribute('class');
  });

  tr.classList.add('active');
});

// create form and validate data

const addEmployee = document.createElement('form');

addEmployee.classList.add('new-employee-form');

addEmployee.innerHTML = `
  <label> Name:
    <input type="text" name = "name" data-qa="name" required>
  </label>
  <label> Position:
    <input type="text" name = "position" data-qa="position">
  </label>
  <label> Office:
    <select name = "office" data-qa="office" required>
      <option value="" selected disabled>Choose office</option>
      <option value="Tokyo">Tokyo</option>
      <option value="Singapore">Singapore</option>
      <option value="London">London</option>
      <option value="New York">New York</option>
      <option value="Edinburgh">Edinburgh</option>
      <option value="San Francisco">San Francisco</option>
    </select>
  </label>
  <label> Age:
    <input type="number" name = "age" data-qa="age" required>
  </label>
  <label> Salary:
    <input type="number" name = "salary" data-qa="salary" required>
  </label>
  <button type="submit">Save to table</button>
`;

body.append(addEmployee);

function validation(data) {
  if (data.get('name').trim().length < nameLength
    || /\d/.test(data.get('name'))) {
    pushNotification(
      580,
      10,
      'Enter a correct name!',
      'Name must contain at least 4 letters and not include numbers',
      'error'
    );

    isValid = false;
  } else if (data.get('age') < minAge
  || data.get('age') > maxAge) {
    pushNotification(
      580,
      10,
      'Enter a correct age!',
      'Your age must be from 18 to 90 years',
      'error'
    );

    isValid = false;
  } else if (data.get('position').trim().length < nameLength
    || /\d/.test(data.get('position'))) {
    pushNotification(
      580,
      10,
      'Enter a position!',
      'You should enter a correct position',
      'error'
    );

    isValid = false;
  } else if (data.get('salary') <= 0) {
    pushNotification(
      580,
      10,
      'Enter a correct salary!',
      'Salary must be more than 0',
      'error'
    );

    isValid = false;
  } else {
    isValid = true;
  }
};

addEmployee.addEventListener('submit', submitEvent => {
  const employeeInfo = new FormData(addEmployee);
  const salaryToNormalize = employeeInfo.get('salary');
  let normalizedSalary = salaryToNormalize;

  if (salaryToNormalize.length > 3) {
    normalizedSalary
    = salaryToNormalize.slice(0, -3)
    + ','
    + salaryToNormalize.slice(-3, salaryToNormalize.length);
  }

  const salary = `$${normalizedSalary}`;

  submitEvent.preventDefault();
  validation(employeeInfo);

  if (!isValid) {
    return;
  }

  const newRow = tbody.insertRow();

  newRow.insertCell(0).innerText = employeeInfo.get('name');
  newRow.insertCell(1).innerText = employeeInfo.get('position');
  newRow.insertCell(2).innerText = employeeInfo.get('office');
  newRow.insertCell(3).innerText = employeeInfo.get('age');
  newRow.insertCell(4).innerText = salary;

  rows.push(newRow);

  addEmployee.reset();

  pushNotification(
    460,
    10,
    'Validation success!',
    'Congrats! New employee is successfully added into the table',
    'success');
});

function pushNotification(posTop, posRight, title, description, type) {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  messageTitle.innerText = title;
  messageDescription.innerText = description;

  message.classList.add('notification', type);
  message.setAttribute('data-qa', 'notification');
  messageTitle.classList.add('title');

  message.append(messageTitle, messageDescription);
  document.body.append(message);

  setTimeout(() => {
    message.remove();
  }, timeoutOfMessage);
};

// change, validate and save data in cell-input

tbody.addEventListener('dblclick', doubleClick => {
  const target = doubleClick.target.closest('td');
  const input = document.querySelector('.cell-input');

  if (input) {
    pushNotification(
      700,
      10,
      'Unfinished changes',
      'You cannot change another cell until this one is not finished',
      'error'
    );

    return editStart(input.parentElement);
  }

  if (!target) {
    return;
  }

  editStart(target);
});

function editStart(td) {
  editingArea = {
    elem: td,
    data: td.innerHTML,
  };

  if (td.cellIndex === 2) {
    const cellOffice = document.createElement('select');

    cellOffice.className = 'cell-input';

    cellOffice.innerHTML = `
      <option value="Choose office" selected disabled>Choose office</option>
      <option value="Tokyo">Tokyo</option>
      <option value="Singapore">Singapore</option>
      <option value="London">London</option>
      <option value="New York">New York</option>
      <option value="Edinburgh">Edinburgh</option>
      <option value="San Francisco">San Francisco</option>
    `;

    td.innerHTML = '';
    td.append(cellOffice);
    cellOffice.focus();

    cellOffice.onblur = () => {
      const office = cellOffice.selectedIndex;

      td.innerHTML = cellOffice[office].value;

      if (cellOffice.selectedIndex === 0) {
        td.innerHTML = editingArea.data;
      }

      pushNotification(
        460,
        10,
        'Changed successfully!',
        'Congrats! The office was successfully changed.',
        'success');
    };

    cellOffice.onkeydown = (enter) => {
      if (enter.key === 'Enter') {
        cellOffice.onblur();
      }
    };
  } else {
    const cellInput = document.createElement('input');

    cellInput.className = 'cell-input';
    cellInput.innerHTML = td.innerHTML;
    td.innerHTML = '';
    td.append(cellInput);
    cellInput.focus();

    switch (td.cellIndex) {
      case 0:
      case 1:
        cellInput.setAttribute('type', 'text');
        break;

      case 3:
      case 4:
        cellInput.setAttribute('type', 'number');
        break;
    }

    cellInput.onblur = (e) => {
      validate(td.cellIndex, cellInput);
      editEnd(editingArea.elem, isCorrect);
      changeIsCorrect();
    };

    cellInput.onkeydown = (enter) => {
      if (enter.key === 'Enter') {
        cellInput.onblur();
      }
    };
  }
};

function validate(index, cell) {
  switch (index) {
    case 0:
    case 1:
      if (/\d/.test(cell.value)
        || cell.value.trim().length < nameLength) {
        isCorrect = false;

        pushNotification(
          580,
          10,
          'Enter a correct data!',
          'This field must contain at least 4 letters and not include numbers.',
          'error');
      }

      break;

    case 3:
      if (cell.value < 18
        || cell.value > 90) {
        if (cell.value === '') {
          isCorrect = false;

          return;
        }

        isCorrect = false;

        pushNotification(
          580,
          10,
          'Enter a correct age!',
          'The age must be 18+ and less than 90.',
          'error');
      }

      break;

    case 4:
      if (+cell.value <= 0) {
        if (cell.value === '') {
          isCorrect = false;

          return;
        }

        isCorrect = false;

        pushNotification(
          580,
          10,
          'Enter a correct salary!',
          'The salary must be more than 0.',
          'error');
      }

      break;
  }
}

function editEnd(td, isOk) {
  if (isOk) {
    switch (td.cellIndex) {
      case 4:
        td.innerHTML = `${(+td.value)}`;

        pushNotification(
          460,
          10,
          'Changed successfully!',
          'Congrats! The salary was successfully changed.',
          'success');
        break;

      case 0:
      case 1:
      case 3:
        td.innerHTML = td.firstChild.value;

        pushNotification(
          460,
          10,
          'Changed successfully!',
          'Congrats! The employee data was successfully changed.',
          'success');
        break;
    }
  } else {
    if (td.firstChild.value === '') {
      td.innerHTML = editingArea.data;

      return;
    }

    return editStart(td);
  }

  editingArea = null;
};

function changeIsCorrect() {
  isCorrect = true;
}
