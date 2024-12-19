"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;
let r = Utils.randomNumber(0, 255);
let cloudCircles = 30;
let clouds = [];
let flowersPos = [];
let starsPos = [];
let animating = true;

//Call functions
setup();
flowers();
stars();
drawClouds();
movingClouds();

//Stop animation when pressing spacebar
window.addEventListener("keydown", function (event) {
	if (event.code === "Space") {
		animating = !animating;
		if (animating) {
			movingClouds();
		}
	}
});

function setup() {
	ground();
	sky();

	//Draw ground
	function ground() {
		context.fillStyle = "green";
		context.fillRect(0, 0, width, height);
	}

	//Draw sky
	function sky() {
		context.fillStyle = Utils.rgb(0, 0, r);
		context.fillRect(0, 0, width, height - height / 4);
	}
}

//Draw flowers
function flowers() {
	flowersPos = [];
	for (let i = 0; i < 50; i++) {
		let x = Utils.randomNumber(10, width - 10);
		let y = Utils.randomNumber((3 * height) / 4 + 10, height - 10);
		flowersPos.push({ x, y });
	}
}

function drawFlowers() {
	for (let i = 0; i < flowersPos.length; i++) {
		let posFlowers = flowersPos[i];
		flower(posFlowers.x, posFlowers.y);
	}
}

function flower(x, y) {
	context.fillStyle = "green";
	context.fillRect(x - 1, y, 2, 10);

	context.fillStyle = "red";
	Utils.fillCircle(x - 5, y, 5);
	Utils.fillCircle(x + 5, y, 5);
	Utils.fillCircle(x, y - 5, 5);
	Utils.fillCircle(x, y + 5, 5);

	context.fillStyle = "yellow";
	Utils.fillCircle(x, y, 3);
}

//Draw stars
function stars() {
	starsPos = [];
	for (let i = 0; i < 80; i++) {
		let x = Utils.randomNumber(5, width - 5);
		let y = Utils.randomNumber(5, (3 * height) / 4 - 5);
		starsPos.push({ x, y });
	}
}

function drawStars() {
	for (let i = 0; i < starsPos.length; i++) {
		let posStars = starsPos[i];
		star(posStars.x, posStars.y);
	}
}

function star(x, y) {
	context.fillStyle = "white";
	Utils.fillCircle(x, y, 2);
}

//Draw clouds
function drawClouds() {
	clouds = [];
	for (let i = 0; i < 5; i++) {
		let x = Utils.randomNumber(-50, width);
		let speed = Utils.randomNumber(1, 3);
		clouds.push({ x, speed });
	}
}

function makeClouds() {
	context.fillStyle = "white";
	for (let i = 0; i < clouds.length; i++) {
		let cloud = clouds[i];
		cloud.x += cloud.speed;

		if (cloud.x > width + cloudCircles + 70) {
			cloud.x = -cloudCircles;
		}

		Utils.fillCircle(cloud.x, 100 + i * 50, cloudCircles);
		Utils.fillCircle(cloud.x - 20, 70 + i * 50, cloudCircles);
		Utils.fillCircle(cloud.x + 20, 70 + i * 50, cloudCircles);
		Utils.fillCircle(cloud.x - 40, 100 + i * 50, cloudCircles);
		Utils.fillCircle(cloud.x + 40, 100 + i * 50, cloudCircles);
	}
}

//Draw signature
function signature(x, y) {
	context.beginPath();
	context.fillStyle = "black";
	context.fillRect(x, y, 60, 60);

	context.fillStyle = "#d1c25d";
	context.fillRect(x + 25, y + 5, 10, 10);
	context.fillRect(x + 15, y + 15, 10, 10);
	context.fillRect(x + 35, y + 15, 10, 10);
	context.fillRect(x + 5, y + 25, 10, 10);
	context.fillRect(x + 25, y + 25, 10, 10);
	context.fillRect(x + 45, y + 25, 10, 10);

	context.fillRect(x + 15, y + 35, 30, 20);
	context.fillStyle = "black";
	context.fillRect(x + 25, y + 35, 10, 10);
}

//Draw moving clouds
function movingClouds() {
	if (!animating) return;

	context.clearRect(0, 0, width, height);

	setup();

	drawFlowers();
	if (r < 255 / 2) {
		drawStars();
		context.fillStyle = "yellow";
		//moon
		Utils.fillCircle(60, 60, 50);
	} else {
		context.fillStyle = "yellow";
		//sun
		Utils.fillCircle(width / 2, height / 3, 175);
	}

	makeClouds();

	signature(width - 65, height - 65);

	if (animating) {
		requestAnimationFrame(movingClouds);
	}
}
