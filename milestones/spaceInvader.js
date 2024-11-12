"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

alert("Draw your space invader here");

signature();

function signature() {
    //Achtergrond//
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();

    //1ste rij//
    context.beginPath();
    context.fillStyle = "#d1c25d";
    context.rect(175, 75, 50, 50);
    context.fill();

    //2de rij//
    context.beginPath();
    context.rect(125, 125, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(225, 125, 50, 50);
    context.fill();

    //3de rij//
    context.beginPath();
    context.rect(75, 175, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(175, 175, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(275, 175, 50, 50);
    context.fill();

    //mondje//
    context.beginPath();
    context.rect(125, 225, 150, 100);
    context.fill();

    context.beginPath();
    context.fillStyle = "black";
    context.rect(175, 225, 50, 50);
    context.fill();
}