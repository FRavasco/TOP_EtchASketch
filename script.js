const outContainer = document.querySelector('.outContainer');
const body = document.querySelector('body');

function createGrid(side){

    const existingGrid = document.querySelectorAll('.grid')
    existingGrid.forEach(e => {e.remove()
    });

    for (i=0; i<(side*side); i++){
        const grid = document.createElement('div');

        grid.classList.add('grid');
        outContainer.appendChild(grid);
        // grid.textContent = i;

    }
}

function getSize(){
    return side = prompt('Input your canvas size', 64);
}

function paint(e){
    e.target.classList.add('painted')
}

function removePaint(e){
        e.target.classList.remove('painted')
}

createGrid(64)
const btn = document.createElement('button');

btn.classList.add('btn');
btn.textContent = 'Chose the size of your canvas!'
btn.style.fontSize = '15px';
btn.style.backgroundColor = 'green';
body.appendChild(btn);
// grid.textContent = i;

btn.addEventListener('click', function(){
    createGrid(getSize())
});

const grids = document.querySelectorAll('.grid')

grids.forEach(grid => grid.addEventListener('mouseover', paint ))
//grids.forEach(grid => grid.addEventListener('mouseout', removePaint))