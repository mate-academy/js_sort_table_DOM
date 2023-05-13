"use strict";

const thead = document.querySelector("thead");
const theadChildren = thead.children[0];
const tbody = document.querySelector("tbody");
let sortBy = "";

theadChildren.children[0].setAttribute("data-sortBy", "name");
theadChildren.children[1].setAttribute("data-sortBy", "position");
theadChildren.children[2].setAttribute("data-sortBy", "age");
theadChildren.children[3].setAttribute("data-sortBy", "salary");

thead.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "TH") {
    sortBy = target.dataset.sortby;

    let sortedTbody = "";
    const tbodyChildren = [...tbody.children];

    switch (sortBy) {
      case "name":
        sortedTbody = sortBodyString(tbodyChildren, 0);
        break;

      case "position":
        sortedTbody = sortBodyString(tbodyChildren, 1);
        break;

      case "age":
        sortedTbody = sortBodyNumber(tbodyChildren, 2, (num) => parseInt(num));
        break;

      case "salary":
        sortedTbody = sortBodyNumber(tbodyChildren, 3, (num) =>
          parseInt(num.replace(/\$|,/g, ""))
        );
        break;

      default:
        break;
    }

    if (sortedTbody) {
      tbody.innerHTML = "";

      for (const child of sortedTbody) {
        tbody.append(child);
      }
    }
  }
});

function sortBodyString(arr, childNumber) {
  return arr.sort((childA, childB) => (
    childA.children[childNumber].innerText.localeCompare(
    childB.children[childNumber].innerText
    )
  ));
}

function sortBodyNumber(arr, childNumber, parsePattern) {
  return arr.sort((childA, childB) => (
    parsePattern(childA.children[childNumber].innerText) -
    parsePattern(childB.children[childNumber].innerText)
  ));
}
