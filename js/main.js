let redButton = document.querySelector('.red-btn');
let yellowButton = document.querySelector('.yellow-btn');
let greenButton = document.querySelector('.green-btn');
let allButton = document.querySelector('.all-btn')


let spanRed = document.querySelector('.red');
let spanYellow = document.querySelector('.yellow');
let spanGreen = document.querySelector('.green');



redButton.addEventListener('click', changeColorRed);

function changeColorRed() {

    spanRed.style.backgroundColor = 'red'
    spanYellow.style.backgroundColor = 'darkgray'
    spanGreen.style.backgroundColor = 'darkgray';

    redButton.addEventListener('click', deleteColor);
   function deleteColor() {
    spanRed.style.backgroundColor = 'darkgray';
   }
}


yellowButton.addEventListener('click', changeColorYellow);

function changeColorYellow() {

    spanRed.style.backgroundColor = 'darkgray'
    spanYellow.style.backgroundColor = 'rgb(248, 248, 4)'
    spanGreen.style.backgroundColor = 'darkgray';
    
    yellowButton.addEventListener('click', deleteColor);
    function deleteColor() {
     spanYellow.style.backgroundColor = 'darkgray';
    }
}
greenButton.addEventListener('click', changeColorGreen);

function changeColorGreen() {

    spanRed.style.backgroundColor = 'darkgray';
    spanYellow.style.backgroundColor = 'darkgray';
    spanGreen.style.backgroundColor = 'rgb(23, 212, 23)'

    greenButton.addEventListener('click', deleteColor);
    function deleteColor() {
     spanGreen.style.backgroundColor = 'darkgray';
    }
}


allButton.addEventListener('click', deleteChanges);

function deleteChanges() {
spanRed.style.backgroundColor = 'darkgray';
spanYellow.style.backgroundColor = 'darkgray';
spanGreen.style.backgroundColor = 'darkgray';
}