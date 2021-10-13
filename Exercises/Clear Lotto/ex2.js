/* function randomNumbers() {
    var tableCells = this.parentNode.getElementsByTagName('td');

    for (var i = 0; i < tableCells.length; i++ ) {
        var randomNumber = Math.ceil(Math.random() * 49);
        tableCells[i].firstChild.nodeValue = randomNumber;
    }
}

function myLoadEvent() {
    var element = document.getElementsByTagName('button');
    element[0].addEventListener('click', randomNumbers);
    element[1].addEventListener('click', randomNumbers);
    element[2].addEventListener('click', randomNumbers);
} */

function createTable() {
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    table.appendChild(tr);

    for (var i = 0; i < 6; i++) {
        var randomNumber = Math.ceil(Math.random() * 49);
        var td = document.createElement('td');
        var textNode = document.createTextNode(randomNumber);
        td.appendChild(textNode);
        tr.appendChild(td);
    }
    this.parentNode.appendChild(table);  
}

function clearTable() {
    var table = document.getElementsByTagName('table')[0];
    table.parentNode.removeChild(table);
}

function myLoadEvent() {
    var element = document.getElementsByTagName('button');
    element[0].addEventListener('click', createTable);
    element[2].addEventListener('click', createTable);
    element[4].addEventListener('click', createTable);
    element[1].addEventListener('click', clearTable);
    element[3].addEventListener('click', clearTable);
    element[5].addEventListener('click', clearTable);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);