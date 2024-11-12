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