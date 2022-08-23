

const container = document.querySelector('.container');
const rowsCount = document.querySelector('#rowCount');


let rows = 4;

function makeRows(rows){

container.style.setProperty('--grid-rows',rows);
container.style.setProperty('--grid-cols',rows);

for (let i = 0; i < rows * rows; i++) {
    
    let squares = document.createElement('div');
    
    container.appendChild(squares).className = 'grid-item';

    
}


}

rowsCount.addEventListener('click' ,() => {

    
    rows = prompt('Enter a number smaller then 10');
    

    while (rows >= 100){
        rows = prompt('Enter a number smaller then 10');
    }
    container.replaceChildren();
    makeRows(rows);
  

});



container.addEventListener('mouseover' ,(e) => {
    let red = (Math.floor(Math.random() * 256));
    let green = (Math.floor(Math.random() * 256));
    let blue = (Math.floor(Math.random() * 256));
    e.target.style.background = `rgb(${red}, ${green} , ${blue})`;
    

});
makeRows(rows);