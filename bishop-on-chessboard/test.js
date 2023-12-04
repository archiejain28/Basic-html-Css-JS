const squares = [...document.getElementsByClassName('grid-item')];
let id1=0;
squares.map((square)=>{
//  square.onmouseover = ()=>{
//     const id = squares.indexOf(square);
//     squares[id].style.backgroundColor = 'lightBlue';
//  }
//  square.onmouseout = ()=>{
//     const id = squares.indexOf(square);
//     squares[id].classList.contains('white') ? squares[id].style.backgroundColor='white' : squares[id].style.backgroundColor='black';
//  }

 square.onclick =(e)=>{
    const el = e.target.dataset.index.split('');
    const row = el[0];
    const column = el[1]
    findTopLeft(row,column);
    findTopRight(row,column);
    findBottomLeft(row,column);
    findBottomRight(row,column);
 }  

 square.onmouseleave =(e)=>{
     resetChessboard();
  }
});

function findTopLeft(r,c){
    while(r>=0 && c>=0){
       const element = document.querySelector(`[data-index="${r}${c}"]`);
       console.log(element);
        element.classList.add('blue')
        r--;
        c--;
    };
};

function findTopRight(r,c){
    while(r>=0 && c<8){
        const element = document.querySelector(`[data-index="${r}${c}"]`);
        element.classList.add('blue')
         r--;
         c++;
     };
}

function findBottomRight(r,c){
    while(r<8 && c<8){
        const element = document.querySelector(`[data-index="${r}${c}"]`);
        element.classList.add('blue')
         r++;
         c++;
     };
}

function findBottomLeft(r,c){
    while(r<8 && c>=0){
        const element = document.querySelector(`[data-index="${r}${c}"]`);
        element.classList.add('blue')
         r++;
         c--;
     };
}

function resetChessboard(){
    let squares = document.querySelectorAll('.blue');
    squares.forEach((square)=>{
        square.classList.remove('blue')
    })
}