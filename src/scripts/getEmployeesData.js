const rows = document.querySelectorAll('tbody tr');

const enumEmployee = {
  0: 'name',
  1: 'position',
  2: 'age',
  3: 'salary',
};

const employees = [];

for (const row of rows) {
  const employee = Array.from(row.cells).reduce((acc, next, i) => {
    acc[enumEmployee[i]] = next.textContent;

    return acc;
  }, {});

  employees.push(employee);
}

export default employees;
