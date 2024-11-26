'use strict';

import topic, { select, selectAll, listen } from './utils';

let enemyHP = 0;
let enemyImage = './assets/img/sprite/nothing.png'
let enemyDMG = 0;
let playerHP = 100;

const speak = select('.speak');

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
  speak.innerText('KARL APPEARS!');
}

function addChort() {
  addEnemy(10, [2, 5, 8], './assets/img/sprites/Chort.png');
  speak.innerText('A CHORT APPEARS');
}

function addHippy() {
  speak.innerText('A HIPPY APPEARS!');
  wait(2000)
  speak.innerText('"Peace and love, man!"');
  giveHP();
}

function addGreg() {
  addEnemy(40, [5, 10, 12], './assets/img/sprites/Greg.png');
  speak.innerText('GREG APPEARS!');
}

function addSteve() {
  addEnemy(40, [5, 10, 12], './assets/img/sprites/Greg.png');
  speak.innerText('STEVE APPEARS!');
}

function addSlime() {
  addEnemy(80, [20, 25, 30], './assets/img/sprites/Slime.png');
  speak.innerText('AN ANGRY SLIME APPEARS!')
}

function addHound() {
  addEnemy(15, [10, 12, 15], './assets/img/sprites/hound.png');
  speak.innerText('A RABID DOG APPEARS!');
}

function addSpider() {
  addEnemy(25, [8, 10, 12], './assets/img/sprites/Greg.png');
  speak.innerText('A GIANT SPIDER APPEARS!')
}

function addPsycho() {
  addEnemy(25, [8, 10, 12], './assets/img/sprites/Greg.png');
  speak.innerText('A CRAZY PSYCHO APPEARS!');
}

function giveHP() {playerHP++ * 10}

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

function gameOver() {
  speak.innerText('GAME OVER');
  enemyHP = 0;
  enemyDMG = 0;
  playerHP = 0;
}