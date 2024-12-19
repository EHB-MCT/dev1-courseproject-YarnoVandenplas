"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;
let r = Utils.randomNumber(0, 255);

//calls functions
ground();
sky();
signature(width - 65, height - 65);

//calls flowers and stars
for (let i = 0; i < 30; i++) {
	flowerAndStars(
		Utils.randomNumber(5, width - 5),
		Utils.randomNumber((3 * height) / 4 + 5, height - 5)
	);
}

//calls for stars and moon when night or sun when day
if (r < 255 / 2) {
	for (let i = 0; i < 50; i++) {
		flowerAndStars(
			Utils.randomNumber(5, width - 5),
			Utils.randomNumber(5, (3 * height) / 4 - 5)
		);
	}
	Utils.fillCircle(60, 60, 50);
} else {
	context.fillStyle = "yellow";
	Utils.fillCircle(width / 2, height / 3, 175);
}

//makes background
function ground() {
	context.fillStyle = "green";
	context.fillRect(0, 0, width, height);
}

function sky() {
	context.fillStyle = Utils.rgb(0, 0, r);
	context.fillRect(0, 0, width, height - height / 4);
}

//makes the flowers and stars
function flowerAndStars(x, y) {
	if (y < (3 * height) / 4 - 5) {
		context.fillStyle = "yellow";
	} else {
		context.fillStyle = "white";
	}
	Utils.fillCircle(x, y, 5);
}

//makes signature
function signature(x, y) {
	//Achtergrond//
	context.beginPath();
	context.fillStyle = "black";
	context.fillRect(x, y, 60, 60);

	//1ste rij//
	context.fillStyle = "#d1c25d";
	context.fillRect(x + 25, y + 5, 10, 10);

	//2de rij//
	context.fillRect(x + 15, y + 15, 10, 10);
	context.fillRect(x + 35, y + 15, 10, 10);

	//3de rij//
	context.fillRect(x + 5, y + 25, 10, 10);
	context.fillRect(x + 25, y + 25, 10, 10);
	context.fillRect(x + 45, y + 25, 10, 10);

	//mondje//
	context.fillRect(x + 15, y + 35, 30, 20);
	context.fillStyle = "black";
	context.fillRect(x + 25, y + 35, 10, 10);
}
