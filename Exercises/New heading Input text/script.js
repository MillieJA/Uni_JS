function runScripts() {
    // creates a pop up
    alert(1);
    // prints to the console
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

// runScripts();
// runScripts();

function newHeading() {
    var element = document.getElementById('pageHeading');
    element.firstChild.nodeValue = 'New Heading';
}

function  updateH1() {
    var element = document.getElementById('pageHeading');
    element.addEventListener('click', newHeading);
}

document.addEventListener('DOMContentLoaded', updateH1);

function newContent() {
    var element = document.getElementById('pageContent');
    element.firstChild.nodeValue = 'New Content';
}

function updateP() {
    var element = document.getElementById('pageContent');
    element.addEventListener('mouseover', newContent);
    // mouseenter
    // mouseleave
}

document.addEventListener('DOMContentLoaded', updateP);