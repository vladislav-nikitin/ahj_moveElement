import Board from './board';
import Character from './character';
import Game from './game';

const board = new Board();
const goblin = new Character();
const game = new Game(board, goblin);

game.start();
