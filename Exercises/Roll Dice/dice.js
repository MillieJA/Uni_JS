console.log('hello');
var myArray = [];
myArray[1] = 'one';
myArray[2] = 'two';
myArray[3] = 'three';
myArray[4] = 'four';
myArray[5] = 'five';
myArray[6] = 'six';

function diceClick() {
    var randomRoll = Math.ceil(Math.random() * 6);
    this.className = 'side' + randomRoll;
    this.nextSibling.nextSibling.firstChild.nodeValue = 'You rolled a ' + myArray[randomRoll];
}

function myLoadEvent() {
    var div = document.getElementsByTagName('div');
    for (var i = 0; i < div.length; i++) {
        div[i].addEventListener('click', diceClick);
    }
}

document.addEventListener('DOMContentLoaded', myLoadEvent);