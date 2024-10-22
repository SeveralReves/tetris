// Arg const characters
let MATRIX = null;
let CURRENTPIECE = null;
let CURRENTPOSITIONPIECEX = 0;
let CURRENTPOSITIONPIECEY = 0;

const init = () => {
  MATRIX = createMatrix();
  printMatrix();
};

const updateMatrix = () => {
    setInterval(() => {
        
    }, 500);
}

const printMatrix = () => {
  const tetris = document.querySelector("#tetris");
  if (tetris) {
    tetris.innerHTML = "";
    MATRIX.forEach((row) => {
      row.forEach((col) => {
        const span = document.createElement("span");

        // Agregar clases al span
        span.classList.add("block");
        if(col){
            span.classList.add("fill");
        }
        // Agregar el span al elemento
        tetris.appendChild(span);
      });
    });
  }
};
const drawNewPiece = () => {
    const pieces = 'ILJOTSZ';
    CURRENTPIECE = createPiece(pieces[pieces.length * Math.random() | 0])
    const n = CURRENTPIECE.length;
    const init = Math.floor((10 - n) / 2) - 1;
    MATRIX.forEach((row,index) => {
        console.log('iteracion', index)
        if(index >= n) return;
        let indexPiece = 0;
        row.forEach((col, indexCol) => {
            if(indexCol > init ){
                MATRIX[index][indexCol] = col + CURRENTPIECE[index][indexPiece];
                indexPiece++; 
            }else if(indexCol >= init+n){
                return
            }

        })
    });
  printMatrix();
}

const createPiece = (type) => {
    if (type === 'T') {
        return [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0],
        ];
    } else if (type === 'O') {
        return [
            [1, 1],
            [1, 1],
        ];
    } else if (type === 'L') {
        return [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1],
        ];
    } else if (type === 'J') {
        return [
            [0, 1, 0],
            [0, 1, 0],
            [4, 1, 0],
        ];
    } else if (type === 'I') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0],
        ];
    } else if (type === 'Z') {
        return [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ];
    }
}

const createMatrix = () => {
  const m = [];
  for (let index = 0; index < 20; index++) {
    m.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }
  return m;
};

document.addEventListener("DOMContentLoaded", function (event) {
  init();
  const button = document.querySelector('#newPiece');
  if(button){
    button.addEventListener('click', () => {
        drawNewPiece();
    })
  }
});
