const tbody = document.querySelector('tbody');

const template = (employees) => {
  return employees
    .map((employee) => {
      const { age, position, salary } = employee;

      return `
    <tr>
      <td>${employee.name}</td>
      <td>${position}</td>
      <td>${age}</td>
      <td>${salary}</td>
    </tr>`;
    })
    .join('');
};

const drawEmployeeView = (employee) => {
  tbody.innerHTML = template(employee);
};

export default drawEmployeeView;
