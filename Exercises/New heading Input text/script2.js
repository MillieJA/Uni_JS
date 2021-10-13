function clickFunction() {
    var element = document.getElementById('textBox');
    alert(element.value);
}
function myLoadFunction() {
    var element = document.getElementById('textButton');
    element.addEventListener('click', clickFunction);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);

/* function clickFunction() {
    var element = document.getElementById('textBox');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
}
function myLoadFunction() {
    var element = document.getElementById('textButton');
    element.addEventListener('click', clickFunction);
}
document.addEventListener('DOMContentLoaded', myLoadFunction); */