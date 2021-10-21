const difficulty = document.getElementById("difficulty")
const startgameButton = document.getElementById("generate")
const container= document.getElementById("container")
const difficultyGroup = document.getElementById("difficulty_group")



startgameButton.addEventListener("click", function(){

    
    const bombsArray = generateBombs()
    console.log(bombsArray)
    


    

    for(let i =1; i<=difficulty.value; i++){
        const divEl = document.createElement("div")
        divEl.innerHTML = `${i}`       
        container.append(divEl)
        divEl.className="grid_cell"


        if(difficulty.value==100){
            container.classList.add("container_hard")
        }else if(difficulty.value==81){
            container.classList.add("container_normal")
        }else if(difficulty.value==49){
            container.classList.add("container_easy")
        }
           


                 
    }

    
    const cells = document.getElementsByClassName("grid_cell")
    console.log(cells)

    for(let i = 0; i<cells.length;i++){
        const element = cells[i]

        element.addEventListener("click", function(){
            const cellNumber = parseInt(this.innerText)
            this.classList.add("backGroundCliccked")
            checkBomb(bombsArray, cellNumber)

        })


        

    }


  
    






})

/* function reload() {
    location.reload();
} */






function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function generateBombs(){
    const bombs= []

    while(bombs.length < 16){
        const randomNumber = getRandom(1,difficulty.value)

        if(!bombs.includes(randomNumber)){
            bombs.push(randomNumber)
        }

    }
    return bombs
    
}

function checkBomb(bombsArray, cellNumber){
    if(bombsArray.includes(cellNumber)){
        console.log("it's a bomb")
    }else{
        console.log("keep playing")
    }

}