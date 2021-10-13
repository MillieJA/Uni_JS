/* function clickAlert() {
    alert("This button was pressed");
} */

function startColour() {
    var element = document.getElementById('circle');
    element.style.opacity = '0.5';
}

/* function newColour() {
    var element = document.getElementById('circle');
    element.style.backgroundColor = 'blue';
    element.style.opacity = '1';
}

function clickColour() {
    var element = document.getElementById('circle');
    element.addEventListener('click', newColour);
} */

document.addEventListener('DOMContentLoaded', startColour);
// document.addEventListener('DOMContentLoaded', clickColour);

function addOpacity() {
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity + 0.1;
}

function clickOpacity() {
    var element = document.getElementById('circle');
    element.addEventListener('click', addOpacity);
}

document.addEventListener('DOMContentLoaded', clickOpacity);