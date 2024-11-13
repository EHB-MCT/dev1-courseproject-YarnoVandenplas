"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;
let r = Utils.randomNumber(0, 255);


//background
ground();

function ground() {
    context.fillStyle = "green";
    context.fillRect(0, 0, width, height);
}

sky();

function sky() {
    context.fillStyle = Utils.rgb(0, 0, r);
    context.fillRect(0, 0, width, height - height / 4);
}

//flowers and stars
//makes the flowers and stars
function flowerAndStars(x, y) {
    if (y < 3 * height / 4 - 5) {
        context.fillStyle = "yellow";
    }
    else {
        context.fillStyle = "white";
    }
        Utils.fillCircle(x, y, 5);
}

//calls for flowers
for (let i = 0; i < 30; i++) {
    flowerAndStars(Utils.randomNumber(5, width - 5),Utils.randomNumber(3 * height / 4 + 5 , height - 5));
}

//calls for stars and moon when night or sun when day
if (r < 255 / 2) {
    for (let i = 0; i < 50; i++) {
        flowerAndStars(Utils.randomNumber(5, width - 5), Utils.randomNumber(5, 3 * height / 4 - 5));
    }
    Utils.fillCircle(60, 60, 50);
}
else {
    context.fillStyle = "yellow";
    Utils.fillCircle(width / 2, height / 3, 175);
}