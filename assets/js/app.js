'use strict';

import topic, { select, selectAll, listen } from './utils';

let enemyHP = 0;
let enemyImage = './assets/img/sprite/nothing.png'
let enemyDMG = 0;
let playerHP = 100;

function addKarl() {
  let enemyHP = 50;
  const rand = [8, 10, 15];
  let enemyDMG = Math.floor(Math.random(rand) * 10);
  let enemyImage = './assets/img/sprites/Karl.png';
  enemyBattle();
}

function addChort() {
  let enemyHP = 10;
  const rand = [2, 5, 8];
  let enemyDMG = Math.floor(Math.random(rand) * 10);
  let enemyImage = './assets/img/sprites/Chort.png'
  enemyBattle();
}

function addHippy() {
  let enemyHP = 20;
  const rand = [1, 2, 3];
  let chance = Math.floor(Math.random(rand.length) * 10);
  if (chance > 2) {enemyBattle()}
  else {
    hippyTalk();
    getNewEnemy();
  }
}

function addGreg() {
  let enemyHP = 40;
  const rand = [5, 10, 12];
  let enemyDMG = Math.floor(Math.random(rand) * 10);
  let enemyImage = './assets/img/sprites/Greg.png'
  enemyBattle();
}

function addSteve() {
  let enemyHP = 40;
  const rand = [5, 10, 12];
  let enemyDMG = Math.floor(Math.random(rand) * 10);
  let enemyImage = './assets/img/sprites/Greg.png'
  enemyBattle();
}

function addSlime() {
  let enemyHP = 80;
  const rand = [20, 25, 30];
  let enemyDMG = Math.floor(Math.random(rand) * 10);
  let enemyImage = './assets/img/sprites/Slime.png'
  enemyBattle();
}

function addHound() {
  let enemyHP = 15;
  const rand = [10, 12, 15];
  let enemyDMG = Math.floor(Math.random(rand) * 10);
  let enemyImage = './assets/img/sprites/hound.png'
  enemyBattle();
}

function addSpider() {
  let enemyHP = 25;
  const rand = [8, 10, 12];
  let enemyDMG = Math.floor(Math.random(rand) * 10);
  let enemyImage = './assets/img/sprites/Greg.png'
  enemyBattle();
}

function addPsycho() {
  let enemyHP = 25;
  const rand = [8, 10, 12];
  let enemyDMG = Math.floor(Math.random(rand) * 10);
  let enemyImage = './assets/img/sprites/Greg.png'
  enemyBattle();
}

function getNewEnemy() {
  const rand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  let enemyChoice = Math.floor(Math.random(rand.length) * 10);
  if (enemyChoice = 0) {addKarl()}
  else if (enemyChoice = 1) {addChort()}
  else if (enemyChoice = 2) {addHippy()} 
  else if (enemyChoice = 3) {addGreg()} 
  else if (enemyChoice = 4) {addSteve()}
  else if (enemyChoice = 5) {addSlime()}
  else if (enemyChoice = 6) {addHound()}
  else if (enemyChoice = 7) {addSpider()}
  else if (enemyChoice = 8) {addPsycho()}
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
  if (playerHP < 1) {endGame()} 
  else {continueGame()}
}

function endGame() {
  
}