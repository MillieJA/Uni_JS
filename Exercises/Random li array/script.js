var numbers = [];

function createLi(text) {
    var listItem = document.createElement('li');
    var textNode = document.createTextNode(text);
    listItem.appendChild(textNode);
    var unorderedList = document.getElementsByTagName('ul')[0];
    unorderedList.appendChild(listItem);
}

function clickEvent() { 
    var pickAgain = true;
    while (pickAgain == true) {
        var randomNumber = Math.ceil(Math.random() * 100);
        var alreadyPicked = false;
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] == randomNumber) {
                alreadyPicked = true;
            }
        }
        if (alreadyPicked == true) {
            pickAgain = true;
        }
        else {
            pickAgain = false;
        }
    }
    numbers.push(randomNumber);
    createLi(randomNumber);
} 

function myLoadEvent() {
    var element = document.getElementsByTagName('button')[0];
    element.addEventListener('click', clickEvent);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);