'use strict';

const head = document.querySelector('thead');
const bodyPart = document.querySelector('tbody');
const items = Array.from(document.querySelectorAll('tbody tr'));

head.addEventListener('click', (e) => {
  const sortIndex = e.target.cellIndex;
  const sortParam = e.target.textContent;

    items.sort((a, b) => {
        const fields = a.children;
        const fieldsB = b.children;

        if (sortParam === 'Age' || sortParam === 'Salary') {
            const firstNum = parseFloat(
                fields[sortIndex].textContent.replace(/[$,]/g, ''),
            );
            const secondtNum = parseFloat(
                fieldsB[sortIndex].textContent.replace(/[$,]/g, ''),
            );

            return firstNum - secondtNum;
        } else {
            return fields[sortIndex].textContent.localeCompare(
                fieldsB[sortIndex].textContent,
            );
        }
    }
  );

  items.forEach((item) => {
    bodyPart.append(item);
  });
});
