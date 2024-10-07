const salaryToNumber = (salary) => salary.replace(/[$,]/g, '');

export const sortByAge = (employees) =>
  [...employees].sort((a, b) => a.age - b.age);

export const sortByName = (employees) =>
  [...employees].sort((a, b) => a.name.localeCompare(b.name));

export const sortByPosition = (employees) =>
  [...employees].sort((a, b) => a.position.localeCompare(b.position));

export const sortBySalary = (employees) =>
  [...employees].sort(
    (a, b) => salaryToNumber(a.salary) - salaryToNumber(b.salary),
  );
