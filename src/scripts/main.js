'use strict';

const title = document.querySelector('thead');
const people = document.querySelectorAll('tbody > tr > td');
const salaries = document.querySelectorAll('tbody > tr > td:last-child');

const toNum = (value) =>
  (value.split('').filter(a => '0123456789'.includes(a)).join(''));

const sorted = [...salaries].sort((a, b) =>
 toNum(a.innerHTML) - toNum(b.innerHTML));
const saver = [...salaries];
const state = [sorted.map(a => a.innerHTML), saver.map(a => a.innerHTML)];

title.addEventListener('click', (event) => {
  for (let i = 0; i < sorted.length; i++) {
    people[(i * 4) + 3].innerHTML = state[0][i];
  }

  state.reverse();
});
