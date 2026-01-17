'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const tBody = table.querySelector('tbody');
  const tHead = table.querySelector('thead');

  function converToNumber(td) {
    const money = Number(td.replace(/[$,]/g, ''));

    return isNaN(money) ? 0 : money;
  }

  table.addEventListener('click', (e) => {
    const heading = [...tHead.querySelectorAll('th')];
    const body = [...tBody.children];

    switch (e.target) {
      case heading[0]:
        const workersName = body.sort((tr1, tr2) => {
          const name1 = tr1.children[0].textContent.trim();
          const name2 = tr2.children[0].textContent.trim();

          return name1.localeCompare(name2);
        });

        workersName.forEach((tr) => tBody.append(tr));
        break;

      case heading[1]:
        const position = body.sort((tr1, tr2) => {
          const position1 = tr1.children[1].textContent.trim();
          const position2 = tr2.children[1].textContent.trim();

          return position1.localeCompare(position2);
        });

        position.forEach((tr) => tBody.append(tr));
        break;

      case heading[2]:
        const age = body.sort((tr1, tr2) => {
          const age1 = converToNumber(tr1.children[2].textContent.trim());
          const age2 = converToNumber(tr2.children[2].textContent.trim());

          return age1 - age2;
        });

        age.forEach((tr) => tBody.append(tr));
        break;
      case heading[3]:
        const salary = body.sort((tr1, tr2) => {
          const salary1 = converToNumber(tr1.children[3].textContent.trim());
          const salary2 = converToNumber(tr2.children[3].textContent.trim());

          return salary1 - salary2;
        });

        salary.forEach((tr) => tBody.append(tr));
        break;

      default:
        return table;
    }
  });
});
