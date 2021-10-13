function myClickEvent(event) {
    var randomSize = Math.ceil(Math.random() * 200);
    var rand1 = Math.ceil(Math.random() * 255);
    var rand2 = Math.ceil(Math.random() * 255);
    var rand3 = Math.ceil(Math.random() * 255);

    var clickX = event.clientX - (randomSize/2);
    var clickY = event.clientY - (randomSize/2);

    var div = document.createElement('div');
    div.style.borderRadius = '50%';
    div.style.position = 'absolute';
    div.style.left = clickX + 'px';
    div.style.top = clickY + 'px';
    div.style.width = randomSize + 'px';
    div.style.height = randomSize + 'px';
    div.style.backgroundColor =  'rgb(' + rand1 + ', ' + rand2 + ', ' + rand3 + ')'; 

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div);

    var xDirection = Math.floor(Math.random()*10)-5;
    var yDirection = Math.floor(Math.random()*10)-5;

    var speed = Math.ceil(Math.random()*10);

    setInterval(function() {
        var xPosition = div.offsetLeft;
        var yPosition = div.offsetTop;

        div.style.top = yPosition + yDirection + 'px';
        div.style.left = xPosition + xDirection + 'px';

        if (parseInt(div.style.left) < 0) {
            xDirection = Math.abs(xDirection);
        }

        if (parseInt(div.style.left) + div.offsetWidth > window.innerWidth) {
            xDirection = 0 - Math.abs(xDirection);
        }
        if (parseInt(div.style.top) < 0) {
            yDirection = Math.abs(yDirection);
        }
        
        if (parseInt(div.style.top) + div.offsetHeight > window.innerHeight) {
            yDirection = 0 - Math.abs(yDirection);
        }
    }, speed);
    }

    /*function moveLeft() {
        var div = document.getElementById('div');
        var positionLeft = div.offsetLeft;
        div.style.top = positionTop - 1 + 'px';
    
        if (positionLeft == 0) {
            clearInterval(interval);
            interval = setInterval(moveRight, 10);
        }
    }
    
    function moveRight() {
        var div = document.getElementById('div');
        var positionRight = div.offsetLeft;
        div.style.top = positionRight + 1 + 'px';
    
        if (positionRight == window.innerWidth - randomSize) {
            clearInterval(interval);
            interval = setInterval(moveLeft, 10);
        }
    }
    
    function moveUp() {
        var div = document.getElementById('div');
        var positionTop = div.offsetTop;
        div.style.top = positionTop - 1 + 'px';
    
        if (positionTop == 0) {
            clearInterval(interval);
            interval = setInterval(moveDown, 10);
        }
    }
    
    function moveDown() {
        var div = document.getElementById('div');
        var positionTop = div.offsetTop;
        div.style.top = positionTop + 1 + 'px';
    
        if (positionTop == window.innerHeight - randomSize) {
            clearInterval(interval);
            interval = setInterval(moveUp, 10);
        }
    } */

document.addEventListener('click', myClickEvent);