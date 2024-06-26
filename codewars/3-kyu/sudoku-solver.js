/*
```yaml
problem: "Sudoku Solver"
tags: game, game-solver, algorithm
difficulty: 3-kyu
source: codewars
link: https://www.codewars.com/kata/5296bc77afba8baa690002d7
```
*/



const sudoku = puzzle => {
  // 변수 선언 :  
  const
    rows = new Array(9).fill(0),
    cols = new Array(9).fill(0),
    boxes = new Array(9).fill(0);
  // 모든 퍼즐 순회ㅣ,
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const num = puzzle[row][col];
      if (num !== 0) {
        const mask = 1 << (num - 1);
        rows[row] |= mask;
        cols[col] |= mask;
        boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)] |= mask;
      }
    }
  }

  const isValid = (row, col, num) => {
    const mask = 1 << (num - 1);
    return !(rows[row] & mask || cols[col] & mask || boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)] & mask);
  };

  const setNumber = (row, col, num, add) => {
    const mask = 1 << (num - 1);
    rows[row] = add ? rows[row] | mask : rows[row] & ~mask;
    cols[col] = add ? cols[col] | mask : cols[col] & ~mask;
    boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)] = add ? boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)] | mask : boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)] & ~mask;
  };

  const solve = () => {
    let minOptions = 10, rowToFill = -1, colToFill = -1;
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (puzzle[row][col] === 0) {
          let options = 0;
          for (let num = 1; num <= 9; num++) {
            if (isValid(row, col, num)) options++;
          }
          if (options < minOptions) {
            minOptions = options;
            rowToFill = row;
            colToFill = col;
          }
        }
      }
    }

    if (minOptions === 10) return true; // Solved

    for (let num = 1; num <= 9; num++) {
      if (isValid(rowToFill, colToFill, num)) {
        puzzle[rowToFill][colToFill] = num;
        setNumber(rowToFill, colToFill, num, true);
        if (solve()) return true;
        setNumber(rowToFill, colToFill, num, false);
        puzzle[rowToFill][colToFill] = 0;
      }
    }

    return false;
  };

  solve();
  return puzzle;
};
