let color = '#282a36';
const board = document.querySelector('.sketch-board');
const colorBtns = document.querySelectorAll('.color-buttons');
const clearBtn = document.getElementById('clearBtn');
const slider = document.getElementById('slider');

function createBoard(size){
  const gridDivs = board.querySelectorAll('div');
  gridDivs.forEach((gridDiv) => gridDiv.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const boardSize = size * size;
  for(let i = 0;i < boardSize;i++){
    const eachGrid = document.createElement('div');
    eachGrid.addEventListener("mouseover", colorEachGrid);
    eachGrid.style.backgroundColor = '#f8f8f2';
    board.insertAdjacentElement("beforeend", eachGrid);
  }
}

function changeSize(){
  const gridDivs = board.querySelectorAll('div');
  gridDivs.forEach((gridDiv) => gridDiv.remove());
  createBoard(slider.value);
}

function colorEachGrid(){
  const colorArray = ['#282a36', '#44475a', '#6272a4', '#8be9fd', '#50fa7b', '#ffb86c', '#ff79c6', '#bd93f9', '#ff5555', '#f1fa8c'];
  const random = colorArray[Math.floor(Math.random()*colorArray.length)];

  switch(color){
    case 'random':
      this.style.backgroundColor = random; 
      break;
    case 'cyan':
      this.style.backgroundColor = '#8be9fd';
      break;
    case 'eraser':
      this.style.backgroundColor = '#f8f8f2';
      break;
    case 'dark':
      this.style.backgroundColor = '#282a36';
      break;
    default:
      this.style.backgroundColor = color;
      break;
  }
}

function updateColor(e){
  switch(e.target.dataset.choice){
    case 'random':
      color = 'random';
      break;
    case 'cyan':
      color = 'cyan';
      break;
    case 'eraser':
      color = 'eraser';
      break;
    default:
      color = 'dark';
      break;
  }
}

function clearBoard(){
    const gridDivs = board.querySelectorAll('div');
    gridDivs.forEach((gridDiv) => gridDiv.style.backgroundColor = '#f8f8f2');
}

createBoard(16);
clearBtn.addEventListener('click', clearBoard);
colorBtns.forEach((colorBtn) => colorBtn.addEventListener('click', updateColor));
slider.addEventListener('mouseup', changeSize);