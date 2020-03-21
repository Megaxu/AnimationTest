var x = 0;
var y = 0;

var x1 = 50;
var y1 = 50;

var x2 = 100;
var y2 = 100;

var x3 = 150;
var y3 = 150;

var x4 = 200;
var y4 = 200;

var x5 = 250;
var y5 = 250;

var x6 = 300;
var y6 = 300;

var box = document.getElementById("box");
var boxTwo = document.getElementById("second-box");
var boxThree = document.getElementById("third-box");
var boxFour = document.getElementById("fourth-box");
var boxFive = document.getElementById("fifth-box");
var boxSix = document.getElementById("sixth-box");
var boxSeven = document.getElementById("seventh-box");

var time = setInterval(callAll, 10);

function callAll() {
    move();
    moveTwo();
    moveThree();
    moveFour();
    moveFive();
    moveSix();
    moveSeven();
}

function move() {
    if ((x >= 0 && x <= 649) && y == 0) {
        x += 1;
        box.style.left = x + "px";
    }
    else if(x == 650 && (y >= 0 && y <= 649)) {
        y += 1;
        box.style.top = y + "px";
    }
    else if((x >= 1 && x <= 650) && y <= 650) {
        x -= 1;
        box.style.left = x + "px";
    }
    else if(x <= 0 && (y >= 0 && y <= 650)) {
        y -= 1;
        box.style.top = y + "px";
    }
}

function moveTwo() {
    if ((x1 >= 0 && x1 <= 599) && y1 == 50) {
        x1 += 1;
        boxTwo.style.left = x1 + "px";
    }
    else if(x1 == 600 && (y1 >= 0 && y1 <= 599)) {
        y1 += 1;
        boxTwo.style.top = y1 + "px";
    }
    else if((x1 >= 51 && x1 <= 600) && y1 <= 600) {
        x1 -= 1;
        boxTwo.style.left = x1 + "px";
    }
    else if(x1 <= 51 && (y1 >= 0 && y1 <= 600)) {
        y1 -= 1;
        boxTwo.style.top = y1 + "px";
    }
}

function moveThree() {
    if ((x2 >= 0 && x2 <= 549) && y2 == 100) {
        x2 += 1;
        boxThree.style.left = x2 + "px";
    }
    else if(x2 == 550 && (y2 >= 0 && y2 <= 549)) {
        y2 += 1;
        boxThree.style.top = y2 + "px";
    }
    else if((x2 >= 101 && x2 <= 550) && y2 <= 550) {
        x2 -= 1;
        boxThree.style.left = x2 + "px";
    }
    else if(x2 <= 101 && (y2 >= 0 && y2 <= 550)) {
        y2 -= 1;
        boxThree.style.top = y2 + "px";
    }
}

function moveFour() {
    if ((x3 >= 0 && x3 <= 499) && y3 == 150) {
        x3 += 1;
        boxFour.style.left = x3 + "px";
    }
    else if(x3 == 500 && (y3 >= 0 && y3 <= 499)) {
        y3 += 1;
        boxFour.style.top = y3 + "px";
    }
    else if((x3 >= 151 && x3 <= 500) && y3 <= 500) {
        x3 -= 1;
        boxFour.style.left = x3 + "px";
    }
    else if(x3 <= 151 && (y3 >= 0 && y3 <= 500)) {
        y3 -= 1;
        boxFour.style.top = y3 + "px";
    }
}

function moveFive() {
    if ((x4 >= 0 && x4 <= 449) && y4 == 200) {
        x4 += 1;
        boxFive.style.left = x4 + "px";
    }
    else if(x4 == 450 && (y4 >= 0 && y4 <= 449)) {
        y4 += 1;
        boxFive.style.top = y4 + "px";
    }
    else if((x4 >= 201 && x4 <= 450) && y4 <= 450) {
        x4 -= 1;
        boxFive.style.left = x4 + "px";
    }
    else if(x4 <= 201 && (y4 >= 0 && y4 <= 450)) {
        y4 -= 1;
        boxFive.style.top = y4 + "px";
    }
}

function moveSix() {
    if ((x5 >= 0 && x5 <= 399) && y5 == 250) {
        x5 += 1;
        boxSix.style.left = x5 + "px";
    }
    else if(x5 == 400 && (y5 >= 0 && y5 <= 399)) {
        y5 += 1;
        boxSix.style.top = y5 + "px";
    }
    else if((x5 >= 251 && x5 <= 400) && y5 <= 400) {
        x5 -= 1;
        boxSix.style.left = x5 + "px";
    }
    else if(x5 <= 251 && (y5 >= 0 && y5 <= 400)) {
        y5 -= 1;
        boxSix.style.top = y5 + "px";
    }
}

function moveSeven() {
    if ((x6 >= 0 && x6 <= 349) && y6 == 300) {
        x6 += 1;
        boxSeven.style.left = x6 + "px";
    }
    else if(x6 == 350 && (y6 >= 0 && y6 <= 349)) {
        y6 += 1;
        boxSeven.style.top = y6 + "px";
    }
    else if((x6 >= 301 && x6 <= 350) && y6 <= 350) {
        x6 -= 1;
        boxSeven.style.left = x6 + "px";
    }
    else if(x6 <= 301 && (y6 >= 0 && y6 <= 350)) {
        y6 -= 1;
        boxSeven.style.top = y6 + "px";
    }
}