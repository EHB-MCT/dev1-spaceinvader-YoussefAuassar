"use strict";

alert("Draw your space invader here");

drawSpaceInvader();

function drawSpaceInvader() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    // black rectangle with a size of 300x300 pixels
    
    context.fillStyle = "black";
    context.beginPath();
    context.rect(50,50,300,300);
    context.fill();

    // bright green square with size of 50x50 pixels top left

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(125,80,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels top middle

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(175,80,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels top right

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(225,80,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels top left second row

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(75,130,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels middle second row

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(175,130,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels top right second row

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(275,130,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels top left third row

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(125,180,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels top middle third row

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(175,180,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels top right third row

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(225,180,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels top left fourth row

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(75,230,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels middle fourth row

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(175,230,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels top right fourth row

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(275,230,50,50);
    context.fill();

    // bright green square with size of 50x50 pixels top left fifth row

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(75,280,50,50);
    context.fill();


    // bright green square with size of 50x50 pixels top right fifth row

    context.fillStyle = "#66FF00";
    context.beginPath();
    context.rect(275,280,50,50);
    context.fill();

    



}