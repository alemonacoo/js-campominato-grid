console.log("JS OK!");

const cellContainer = document.getElementById("cells-container");

const startButton = document.getElementById("start-button");

startButton.addEventListener('click', function(){
    console.log('Start Button clicked!');
    for(let i = 0; i < 100; i++){
        cellContainer.innerHTML += `<div class="cell">${i+1}</div>`;
    }

}), {once : true};


