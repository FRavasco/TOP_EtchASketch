const body = document.querySelector('body');

function createGrid(size){

    const existingGrid = document.querySelectorAll('.grid')
    existingGrid.forEach(e => {e.remove()
    });
    const existingRows = document.querySelectorAll('.row')
    existingRows.forEach(e => {e.remove()
    });

    const outContainer = document.querySelector('.outContainer');

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 1; j <= size; j++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        //grid.innerText = (i * size) + j;
        row.appendChild(grid);
        }
        outContainer.appendChild(row);
    }


    const grids = document.querySelectorAll('.grid')

    grids.forEach(grid => grid.addEventListener('mouseover', paint ))
    
    /* for (i=0; i<(side*side); i++){
        const grid = document.createElement('div');

        grid.classList.add('grid');
        outContainer.appendChild(grid);
        // grid.textContent = i;

    }*/
}

function getSize(){
    return side = prompt('Input your canvas size', 16);
}

function paint(e){
    e.target.classList.add('painted')
}

function removePaint(e){
        e.target.classList.remove('painted')
}

createGrid(16)
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


//grids.forEach(grid => grid.addEventListener('mouseout', removePaint))