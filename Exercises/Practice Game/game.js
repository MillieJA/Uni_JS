var interval = 0;
var leftPressed = false;
var upPressed = false;
var rightPressed = false;
var downPressed = false;

function myKeyDown(event) {

    if (event.keyCode == 37) {
        leftPressed = true;
    }

    if (event.keyCode == 38) {
        upPressed = true;
    }

    if (event.keyCode == 39) {
        rightPressed = true;
    }

    if (event.keyCode == 40) {
        downPressed = true;
    }
}

function myKeyUp(event) {

    if (event.keyCode == 37) {
        leftPressed = false;
    }
    
    if (event.keyCode == 38) {
        upPressed = false;
    }
    
    if (event.keyCode == 39) {
        rightPressed = false;
    }
    
    if (event.keyCode == 40) {
        downPressed = false;
    }
}

function moveInterval() {

    if (leftPressed || upPressed || rightPressed || downPressed) {
        var element = document.getElementById('player');
        element.classList.remove('stand');
        element.classList.add('walk');
    }
    else {
        var element = document.getElementById('player');
        element.classList.remove('walk');
        element.classList.add('stand');
    }
    
    if (leftPressed == true) {
        var element = document.getElementById('player');
        element.classList.remove('down');
        element.classList.remove('up');
        element.classList.remove('right');
        element.classList.add('left');
        var positionLeft = element.offsetLeft;
        var newLeft = positionLeft - 1;

        var element = document.elementFromPoint(newLeft, player.offsetTop);

        if (element.classList.contains('tree') == false) {
            player.style.left = newLeft + 'px';
        }
    }

    if (upPressed == true) {
        var element = document.getElementById('player');
        element.classList.remove('down');
        element.classList.remove('left');
        element.classList.remove('right');
        element.classList.add('up');
        var positionTop = element.offsetTop;
        var newTop = positionTop - 1;

        var element = document.elementFromPoint(player.offsetLeft, newTop);

        if (element.classList.contains('tree') == false) {
            player.style.top = newTop + 'px';
        }
    }

    if (rightPressed == true) {
        var element = document.getElementById('player');
        element.classList.remove('down');
        element.classList.remove('up');
        element.classList.remove('left');
        element.classList.add('right');
        var positionLeft = element.offsetLeft;
        var newLeft = positionLeft + 1;

        var element = document.elementFromPoint(newLeft+32, player.offsetTop);

        if (element.classList.contains('tree') == false) {
            player.style.left = newLeft + 'px';
        }
    }

    if (downPressed == true) {
        var element = document.getElementById('player');
        element.classList.remove('left');
        element.classList.remove('up');
        element.classList.remove('right');
        element.classList.add('down');
        var positionTop = element.offsetTop;
        var newTop = positionTop + 1;

        var element = document.elementFromPoint(player.offsetLeft, newTop+42);

        if (element.classList.contains('tree') == false) {
            player.style.top = newTop + 'px';
        }
    }

}

function chooseHead() {
    var elements = document.getElementsByClassName('head');
    elements[0].style.backgroundImage = 'url(images/' + this.id + '.png)';
}

function chooseBody() {
    var elements = document.getElementsByClassName('body');
    elements[0].style.backgroundImage = 'url(images/' + this.id + '.png)';
}

function myLoadEvent() {
    document.addEventListener('keydown', myKeyDown);
    document.addEventListener('keyup', myKeyUp);

    var heads = document.getElementsByClassName('heads');
    var elements = heads[0].getElementsByTagName('li');
    for (var i = 0; i < elements.length; i++) { 
        elements[i].addEventListener('click', chooseHead);
    }

    var bodies = document.getElementsByClassName('bodies');
    var elements = bodies[0].getElementsByTagName('li');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', chooseBody);
    }

    setInterval(moveInterval, 10);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);