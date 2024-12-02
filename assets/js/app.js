'use strict';

import * as utils from './utils.js';

let enemyHP = 0;
let enemyImage = './assets/img/sprite/nothing.png'
let enemyDMG = 0;
let playerHP = 100;
let defending = false;
let healthRestored = Math.floor(Math.random(randomHealEffect) * 10);

const randomHealEffect = [1, 3, 5, 8, 10];
const speak = utils.select('.speak');
const playerHPElement = utils.select('.your-hp');
const enemyHPElement = utils.select('.enemy-hp');
const enemyImgElement = utils.select('.enemy-png');
const winsCounter = utils.select('.wins-counter p');

function updateUI() {
  playerHPElement.innerText = `HP: ${playerHP}`;
  enemyHPElement.innerText = `Enemy HP: ${enemyHP}`;
  enemyImgElement.src = enemyImage;
  winsCounter.innerText = `Wins: ${wins}`;
}

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}

function addEnemy(hp, damageArray, imagePath) {
  enemyHP = hp;
  enemyDMG = damageArray[Math.floor(Math.random() * damageArray.length)];
  enemyImage = imagePath;
  enemyBattle();
}

function addKarl() {
  addEnemy(50, [8, 10, 15], './assets/img/sprites/Karl.png');
  speak.innerText = 'KARL APPEARS!';
}

function addChort() {
  addEnemy(10, [2, 5, 8], './assets/img/sprites/Chort.png');
  speak.innerText = 'A CHORT APPEARS';
}

function addHippy() {
  speak.innerText = 'A HIPPY APPEARS!';
  wait(2000)
  speak.innerText = '"Peace and love, man!"';
  giveHP();
}

function addGreg() {
  addEnemy(40, [5, 10, 12], './assets/img/sprites/Greg.png');
  speak.innerText = 'GREG APPEARS!';
}

function addSteve() {
  addEnemy(40, [5, 10, 12], './assets/img/sprites/Greg.png');
  speak.innerText = 'STEVE APPEARS!';
}

function addSlime() {
  addEnemy(80, [20, 25, 30], './assets/img/sprites/Slime.png');
  speak.innerText = 'AN ANGRY SLIME APPEARS!';
}

function addHound() {
  addEnemy(15, [10, 12, 15], './assets/img/sprites/hound.png');
  speak.innerText = 'A RABID DOG APPEARS!';
}

function addSpider() {
  addEnemy(25, [8, 10, 12], './assets/img/sprites/Greg.png');
  speak.innerText = 'A GIANT SPIDER APPEARS!'
}

function addPsycho() {
  addEnemy(25, [8, 10, 12], './assets/img/sprites/Greg.png');
  speak.innerText = 'A CRAZY PSYCHO APPEARS!';
}

function giveHP() {
  playerHP += 10; 
  updateUI()
}

function attack() {
  if (enemyHP <= 0) return;

  const damage = Math.floor(Math.random() * 15) + 5;
  enemyHP -= damage;
  speak.innerText = `You attacked the enemy! Enemy has ${Math.max(enemyHP, 0)} HP left!`;

  if (enemyHP <= 0) {
    wins++;
    speak.innerText = 'Enemy defeated! A new enemy approaches!';
    setTimeout(getNewEnemy, 1000);
  }

  updateUI();
}


function getNewEnemy() {
  const rand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  let enemyChoice = Math.floor(Math.random(rand.length) * 10);
  if (enemyChoice === 0) {addKarl()}
  else if (enemyChoice === 1) {addChort()}
  else if (enemyChoice === 2) {addHippy()} 
  else if (enemyChoice === 3) {addGreg()} 
  else if (enemyChoice === 4) {addSteve()}
  else if (enemyChoice === 5) {addSlime()}
  else if (enemyChoice === 6) {addHound()}
  else if (enemyChoice === 7) {addSpider()}
  else if (enemyChoice === 8) {addPsycho()}
  else {giveHP()}
}

function enemyAttack() {
  let damage = defending ? Math.floor(enemyDMG / 2) : enemyDMG;
  playerHP -= damage;
  speak.innerText = `The enemy attacked you for ${damage} damage!`;
  
  if (playerHP <= 0) {
    gameOver();
  }
  
  defending = false;
  updateUI();
}

function enemyBattle() {
  if (enemyHP < 1) {getNewEnemy()} 
  else if (enemyHP > 5) {attack()}
  else {
    const rand = [1, 2];
    let chance = Math.floor(Math.random(rand) * 10)
    if (chance == 1) {tryHeal()} 
    else {attack()}
  }
}

function gamePlay() {
  if (playerHP < 1) {gameOver()} 
  else {continueGame()}
}

function startGame() {
  speak.innerText = 'You run into the dungeon...';
  getNewEnemy();
  updateUI();
}

function gameOver() {
  speak.innerText('GAME OVER');
  wait(500);
  enemyHP = 0;
  enemyDMG = 0;
  playerHP = 0;
}

utils.listen('keydown', (event) => {
  if (event.code = 'Space') {
    event.preventDefault();
    startGame();
  }
})

utils.listen(select('button[type="attack"]'), 'click', () => attack());
utils.listen(select('button[type="run"]'), 'click', () => gameOver());

utils.listen(select('button[type="defend"]'), 'click', () => {
  speak.innerText = 'You switch to defense! Enemy damage reduced!';
  defending = true;
  enemyAttack();
});

utils.listen(select('button[type="health-regen"]') = () => {
  playerHP += healthRestored;
  speak.InnerText = `You healed ${healthRestored}hp!`;
});