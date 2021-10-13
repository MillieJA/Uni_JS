/*
Program:   Assignment 2: Interactive web page using Javascript, CSS and HTML
Filename:  game.js                             
@author:   © Millie Allen                     
Course:    BSc Computing (Software Engineering) Year 1        
Module:    CSY1018 Web Development                                        
@version:  1.0 
Date:      25/04/19                                    
*/

var timer;
var winTimer;
var loseTimer;
var enemyFireTimer;
var randomTimer;
var player;
var shootTimer = true;
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var spacePressed = false;

function setPlayerDirection(dir) {
	//Display the walk animation for the correct direction, remove the other directions
	//to ensure the player does not have both "left" and "right" applied at the same time
	player.classList.remove('up');
	player.classList.remove('left');
	player.classList.remove('right');
	player.classList.remove('down');
	player.classList.remove('fire');

	player.classList.add(dir);
}

function keyUp(event) {
	if (event.keyCode == 37) {
		leftPressed = false;
	}

	if (event.keyCode == 39) {
		rightPressed = false;
	}

	if (event.keyCode == 38) {
		upPressed = false;
	}

	if (event.keyCode == 40) {
		downPressed = false;
	}

	if (event.keyCode == 32) {
		spacePressed = false;
		player.classList.remove('fire');
	}
}

function move() {
	var left = player.offsetLeft;
	var top = player.offsetTop;

	if (downPressed) {
		setPlayerDirection('down');
		playerDirection = "down";
		top = top + 1;
	}

	if (upPressed) {
		setPlayerDirection('up');
		playerDirection = "up";
		top = top - 1;
	}

	if (leftPressed) {
		setPlayerDirection('left');
		playerDirection = "left";
		left = left - 1;
	}

	if (rightPressed) {
		setPlayerDirection('right');
		playerDirection = "right";
		left = left + 1;
	}

	//Get the the element at the coordinates for where the play will move to
	//All 4 corners of the player are required to check there is no collision on any side
	var playerTopLeft = document.elementFromPoint(left, top);
	var playerTopRight = document.elementFromPoint(left+32, top);
	var playerBottomLeft = document.elementFromPoint(left, top+48);
	var playerBottomRight = document.elementFromPoint(left+32, top+48);


	//If the element that the player is about to walk over contains the class "blocking" then
	// the player is not moved.
	// The player will only be moved to coordinates `top` and `left` if the element in that position is not blocking
	if (!playerTopLeft.classList.contains('blocking') && !playerTopRight.classList.contains('blocking')
		&& !playerBottomLeft.classList.contains('blocking') && !playerBottomRight.classList.contains('blocking')) {
		player.style.left = left + 'px';
		player.style.top = top + 'px';
	}

	//If any of the keys are being pressed, display the walk animation
	if (leftPressed || rightPressed || upPressed || downPressed) {
		player.classList.add('walk');
		player.classList.remove('stand');
	}
	//Otherwise, no keys are being pressed, display stand
	else {
		player.classList.add('stand');
		player.classList.remove('walk');
	}
}

function keyDown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}

	if (event.keyCode == 38) {
		upPressed = true;
	}

	if (event.keyCode == 40) {
		downPressed = true;
	}

	if (event.keyCode == 32) {
		// If space is down, checks if the fire rate timer has ended and fires an arrow
		spacePressed = true;
		if (shootTimer == true) {
			player.classList.add('fire');
			fire();	
		}	
	}
}

function enemyHide () {
	// Generates random numbers and causes the enemies to hide and appear at random intervals
	var randomInterval = Math.ceil(Math.random() * 2000);
	var randomEnemy = Math.ceil(Math.random() * enemy.length) - 1;
	enemy[randomEnemy].classList.remove('appear');
	enemy[randomEnemy].classList.add('hide');
	setTimeout( function() {
		enemy[randomEnemy].classList.remove('hide');
		enemy[randomEnemy].classList.add('appear');	
	}, randomInterval);
}

function fire() {
	// When space is pressed, the player will fire an arrow in the direction they are facing
	var body = document.getElementsByTagName('body')[0];
	var arrow = document.createElement('div');
	arrow.classList.add('arrow');
	arrow.style.position = 'absolute';
	arrow.style.left = player.offsetLeft + 'px';
	arrow.style.top = player.offsetTop + 24 + 'px';

	if (playerDirection == "left") {
		var randomSpeedLeft = Math.ceil(Math.random() * 10);
		arrow.classList.add('left');
		body.appendChild(arrow);
		setInterval( function() {
			var arrowLeft = arrow.offsetLeft;
			var arrowTop = arrow.offsetTop;
			var topLeftCollision = document.elementFromPoint(arrowLeft, arrowTop);
			var topRightCollision = document.elementFromPoint(arrowLeft+32, arrowTop);
			var bottomLeftCollision = document.elementFromPoint(arrowLeft, arrowTop+10);
			var bottomRightCollision = document.elementFromPoint(arrowLeft+32, arrowTop+10);
			if (!topLeftCollision.classList.contains('blocking') && !topRightCollision.classList.contains('blocking') && 
			!bottomLeftCollision.classList.contains('blocking') && !bottomRightCollision.classList.contains('blocking')) { // Arrow will only move if it doesn't detect a tree
				arrow.style.left = arrow.offsetLeft - randomSpeedLeft + 'px';
			}
			else {
				arrow.style.left = arrow.offsetLeft + 'px';
			}
			if (topLeftCollision.classList.contains('enemy') || topRightCollision.classList.contains('enemy') || 
			bottomLeftCollision.classList.contains('enemy') || bottomRightCollision.classList.contains('enemy')) {
				var enemyHit = document.elementFromPoint(arrowLeft, arrowTop);
				if (enemyHit.classList.contains('appear')) { // Arrow will only remove an enemy if it contains the class appear
					enemyHit.classList.remove('stand');
					enemyHit.classList.add('dead');
					setTimeout(function() {  // W3Schools (2019)
						body.removeChild(enemyHit); // Removed the enemy element from the game after the animation is done
					}, 2000);
				}
			}
		}, 10)
	}
	if (playerDirection == "right") {
		var randomSpeedRight = Math.ceil(Math.random() * 10);
		arrow.classList.add('right');
		body.appendChild(arrow);
		setInterval( function() {
			var arrowLeft = arrow.offsetLeft;
			var arrowTop = arrow.offsetTop;
			var topLeftCollision = document.elementFromPoint(arrowLeft, arrowTop);
			var topRightCollision = document.elementFromPoint(arrowLeft+32, arrowTop);
			var bottomLeftCollision = document.elementFromPoint(arrowLeft, arrowTop+10);
			var bottomRightCollision = document.elementFromPoint(arrowLeft+32, arrowTop+10);
			if (!topLeftCollision.classList.contains('blocking') && !topRightCollision.classList.contains('blocking') && 
			!bottomLeftCollision.classList.contains('blocking') && !bottomRightCollision.classList.contains('blocking')) {
				arrow.style.left = arrow.offsetLeft + randomSpeedRight + 'px';
			}
			else {
				arrow.style.left = arrow.offsetLeft + 'px';
			}
			if (topLeftCollision.classList.contains('enemy') || topRightCollision.classList.contains('enemy') || 
			bottomLeftCollision.classList.contains('enemy') || bottomRightCollision.classList.contains('enemy')) {
				var enemyHit = document.elementFromPoint(arrowLeft, arrowTop);
				if (enemyHit.classList.contains('appear')) {
					enemyHit.classList.remove('stand');
					enemyHit.classList.add('dead');
					setTimeout(function() {
						body.removeChild(enemyHit);
					}, 2000);
				}
			}
		}, 10)
	}
	if (playerDirection == "up") {
		var randomSpeedUp = Math.ceil(Math.random() * 10);
		arrow.classList.add('up');
		body.appendChild(arrow);
		setInterval( function() {
			var arrowLeft = arrow.offsetLeft;
			var arrowTop = arrow.offsetTop;
			var topLeftCollision = document.elementFromPoint(arrowLeft, arrowTop);
			var topRightCollision = document.elementFromPoint(arrowLeft+32, arrowTop);
			var bottomLeftCollision = document.elementFromPoint(arrowLeft, arrowTop+10);
			var bottomRightCollision = document.elementFromPoint(arrowLeft+32, arrowTop+10);
			if (!topLeftCollision.classList.contains('blocking') && !topRightCollision.classList.contains('blocking') && 
			!bottomLeftCollision.classList.contains('blocking') && !bottomRightCollision.classList.contains('blocking')) {
				arrow.style.top = arrow.offsetTop - randomSpeedUp + 'px';
			}
			else {
				arrow.style.top = arrow.offsetTop + 'px';
			}
			if (topLeftCollision.classList.contains('enemy') || topRightCollision.classList.contains('enemy') || 
			bottomLeftCollision.classList.contains('enemy') || bottomRightCollision.classList.contains('enemy')) {
				var enemyHit = document.elementFromPoint(arrowLeft, arrowTop);
				if (enemyHit.classList.contains('appear')) {
					enemyHit.classList.remove('stand');
					enemyHit.classList.add('dead');
					setTimeout(function() {
						body.removeChild(enemyHit);
					}, 2000);
				}
			}
		}, 10)
	}
	if (playerDirection == "down") {
		var randomSpeedDown = Math.ceil(Math.random() * 10);
		arrow.classList.add('down');
		body.appendChild(arrow);
		setInterval( function() {
			var arrowLeft = arrow.offsetLeft;
			var arrowTop = arrow.offsetTop;
			var topLeftCollision = document.elementFromPoint(arrowLeft, arrowTop);
			var topRightCollision = document.elementFromPoint(arrowLeft+32, arrowTop);
			var bottomLeftCollision = document.elementFromPoint(arrowLeft, arrowTop+10);
			var bottomRightCollision = document.elementFromPoint(arrowLeft+32, arrowTop+10);
			if (!topLeftCollision.classList.contains('blocking') && !topRightCollision.classList.contains('blocking') && 
			!bottomLeftCollision.classList.contains('blocking') && !bottomRightCollision.classList.contains('blocking')) {
				arrow.style.top = arrow.offsetTop + randomSpeedDown + 'px';
			}
			else {
				arrow.style.top = arrow.offsetTop + 'px';
			}
			if (topLeftCollision.classList.contains('enemy') || topRightCollision.classList.contains('enemy') ||
			bottomLeftCollision.classList.contains('enemy') || bottomRightCollision.classList.contains('enemy')) {
				var enemyHit = document.elementFromPoint(arrowLeft, arrowTop);
				if (enemyHit.classList.contains('appear')) {
					enemyHit.classList.remove('stand');
					enemyHit.classList.add('dead');
					setTimeout(function() {
						body.removeChild(enemyHit);
					}, 2000);
				}
			}
		}, 10)
	}
	shootTimer = false;
	setTimeout(function () {  // W3Schools (2019)
		shootTimer = true; // Sets the fire rate for the arrows
	}, 500)
}

function enemyFire() {
	var healthBar = document.getElementsByTagName('ul')[0];
	var randomSpeed = Math.ceil(Math.random() * 10);
	var randomEnemy = Math.ceil(Math.random() * enemy.length) - 1;
	var body = document.getElementsByTagName('body')[0];
	if (enemy[randomEnemy].classList.contains('appear')) {
		var arrow = document.createElement('div');
		arrow.classList.add('arrow');
		arrow.style.position = 'absolute';
		arrow.classList.add('left');
		arrow.style.left = enemy[randomEnemy].offsetLeft + 'px';
		arrow.style.top = enemy[randomEnemy].offsetTop + 24 + 'px';
		body.appendChild(arrow);
		setInterval( function() {
			var arrowLeft = arrow.offsetLeft;
			var arrowTop = arrow.offsetTop;
			var topLeftCollision = document.elementFromPoint(arrowLeft, arrowTop);
			if (topLeftCollision.classList.contains('blocking')) {
				arrow.style.left = arrow.offsetLeft + 'px';
			}
			else if (topLeftCollision.classList.contains('head')) {
				body.removeChild(arrow);
				player.classList.add('hit');
				setTimeout( function() {
					player.classList.remove('hit');
				}, 200);
				var bars = healthBar.getElementsByTagName('li');
				healthBar.removeChild(bars[0]);
				healthBar.removeChild(bars[0]);
			}
			else if (topLeftCollision.classList.contains('body')) {
				body.removeChild(arrow);
				player.classList.add('hit');
				setTimeout( function() {
					player.classList.remove('hit');
				}, 200);
				var bars = healthBar.getElementsByTagName('li');
				healthBar.removeChild(bars[0]);
			}
			else {
				arrow.style.left = arrow.offsetLeft - randomSpeed + 'px';
			}
		}, 10);
	}
}

function winGame() {
	if (enemy.length == 0) {
		clearInterval(winTimer);
		alert("You win!");
		if (confirm("Do you want to play again?")) { // W3Schools (2019)
			location.reload(); // W3Schools (2019)
		}
		else {
			close(); // cletus (2016)
		}
	}
}

function loseGame() {
	var healthBar = document.getElementsByTagName('ul')[0];
	if (healthBar.childElementCount == 0) {
		clearInterval(loseTimer);
		clearInterval(timer);
		player.classList.add('stand');
		player.classList.remove('walk');
		player.classList.add('dead');
		setTimeout(function() {
			body.removeChild(player);
		}, 2000);
		setTimeout(function() {
			alert("You lose");
			if (confirm("Do you want to play again?")) {
				location.reload();
			}
			else {
				close();
			}
		}, 2000);
	}
}

function gameStart() {
	player = document.getElementById('player');
	enemy = document.getElementsByClassName('enemy');
	timer = setInterval(move, 10);
	winTimer = setInterval(winGame, 10);
	loseTimer = setInterval(loseGame, 10);  // W3Schools (2019)
	enemyFireTimer = setInterval(enemyFire, 500);
	randomTimer = setInterval(enemyHide, 2000);
	document.addEventListener('keydown', keyDown);
	document.addEventListener('keyup', keyUp);
}
document.addEventListener('DOMContentLoaded', gameStart);