var colorArray = [];
    colorArray[1] = "red";
    colorArray[2] = "orange";
    colorArray[3] = "yellow";
    colorArray[4] = "green";
    colorArray[5] = "blue";
    colorArray[6] = "purple";
    colorArray[7] = "pink";
    colorArray[8] = "black";
    colorArray[9] = "gray";
    colorArray[10] = "white";

var borderColorArray = [];
    borderColorArray[1] = "red";
    borderColorArray[2] = "orange";
    borderColorArray[3] = "yellow";
    borderColorArray[4] = "green";
    borderColorArray[5] = "blue";
    borderColorArray[6] = "purple";
    borderColorArray[7] = "pink";
    borderColorArray[8] = "black";
    borderColorArray[9] = "gray";
    borderColorArray[10] = "white";

var borderWidthArray = [];
    borderWidthArray[1] = "1px";
    borderWidthArray[2] = "2px";
    borderWidthArray[3] = "3px";
    borderWidthArray[4] = "4px";
    borderWidthArray[5] = "5px";
    borderWidthArray[6] = "6px";
    borderWidthArray[7] = "7px";
    borderWidthArray[8] = "8px";
    borderWidthArray[9] = "9px";
    borderWidthArray[10] = "10px";

function clickEvent() {
    var randomColor = Math.ceil(Math.random() * 10);
    var randomBorderColor = Math.ceil(Math.random() * 10);
    var randomBorderWidth = Math.ceil(Math.random() * 10);
    var element = document.createElement('div');
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.borderStyle = 'solid';
    element.style.backgroundColor = colorArray[randomColor];
    element.style.borderColor = borderColorArray[randomBorderColor];
    element.style.borderWidth = borderWidthArray[randomBorderWidth];

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(element);
}

function myLoadEvent() {
    var element = document.getElementsByTagName('button');
    element[0].addEventListener('click', clickEvent);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);