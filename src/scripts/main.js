'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const name1 = thead.children[0].children[0];
  const position = thead.children[0].children[1];
  const age = thead.children[0].children[2];
  const salary = thead.children[0].children[3];

  const items = document.querySelectorAll('tr');

  let number = null;
  let callback = (a, b) => a.childNodes[number].textContent
    .localeCompare(b.childNodes[number].textContent);

  switch (e.target) {
    case name1:
      number = 1;
      break;
    case position:
      number = 3;
      break;
    case age:
      number = 5;
      break;
    case salary:
      number = 7;

      callback = (a, b) => a.childNodes[number].textContent
        .slice(1).split(',').join('') - b.childNodes[number].textContent
        .slice(1).split(',').join('');
      break;
  }

  const result = [...items].sort(callback);

  for (const tr in result) {
    if (result[tr].parentElement === tbody) {
      tbody.append(result[tr]);
    }
  }
});
