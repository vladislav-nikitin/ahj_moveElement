import Game from './game';

const board = document.querySelector('.board');
const char = document.querySelector('.goblin');
const game = new Game(board, char);

game.start();
