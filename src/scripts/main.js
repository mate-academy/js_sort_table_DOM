'use strict';

let tBody = document.querySelector('tbody')
let rows = [...tBody.querySelectorAll('tr')]

function sortTable(cellIndex, type = 'text'){
    rows.sort((a, b) => {
        let characteristicA = a.querySelectorAll('td')[cellIndex].textContent
        let characteristicB = b.querySelectorAll('td')[cellIndex].textContent
        
        switch(type) {
            case 'text':
                return characteristicA.localeCompare(characteristicB)
            case 'number':
                return characteristicA - characteristicB
            case 'money':
                characteristicA = parseFloat(characteristicA.replace(/[^0-9.]/g, ''));
                characteristicB = parseFloat(characteristicB.replace(/[^0-9.]/g, ''));
                return characteristicA - characteristicB
            default:
                return
        }
    })

    rows.forEach(row => {
        tBody.appendChild(row)
    });
}

document.querySelector('#nameSort').addEventListener('click', (e) => {
    sortTable(0, 'text')
})

document.querySelector('#positionSort').addEventListener('click', (e) => {
    sortTable(1, 'text')
})

document.querySelector('#ageSort').addEventListener('click', (e) => {
    sortTable(2, 'number')
})

document.querySelector('#salarySort').addEventListener('click', (e) => {
    sortTable(3, 'money')
})