// класс, отвечающий за создание игрового поля

export default class Board {
  constructor() {
    this.board = null;
  }

  create(number) {
    const board = document.createElement("div");
    board.classList.add("board");

    for (let i = 0; i < number ** 2; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      board.appendChild(cell);
    }
    this.board = board;
  }

  render() {}
}
