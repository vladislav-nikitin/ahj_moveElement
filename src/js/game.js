// класс, отвечающий за логику игры
export default class Game {
  constructor(board, char) {
    this.board = board;
    this.char = char;
    this.boardSize = 4;
    this.startPosition = 1;
    this.createBoard();
  }

  static createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
  }
  
  createBoard() {
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      this.board.append(Game.createCell());
    }
  }

  generatePosition() {
    let position = Math.floor(Math.random() * this.boardSize ** 2);
    if (position === this.startPosition) {
      position = Math.floor(Math.random() * this.boardSize ** 2);
    }
    this.startPosition = position;
    return position;
  }

  start() {
    this.board.children[this.startPosition].append(this.char);
    setInterval(() => {
      let position = this.generatePosition();
      this.board.children[position].append(this.char);
    }, 1000);
  }
}
