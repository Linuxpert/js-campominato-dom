//1.Chiedere all'utente il livello di difficoltà del gioco => promt
//2.generare una griglia di gioco quadrata in base alla difficoltà => if
    //2.1 contentente delle celle => ciclo for
//3.quando l'utente clicca il quadrato cambia colore => click

const grid = document.getElementById("grid");

//chiedere all'utente il livello di difficoltà da 1 a 3
let difficultGame = parseInt(prompt("Inserisci un numero da 1 a 3 per la difficoltà, più il numero è alto più sale la difficoltà."));

//controllo della difficoltà, se l'utente non inserisce un numero tra 1 e 3 il promt compare di nuovo
while((difficultGame < 1) || (difficultGame > 3)) {
    difficultGame = parseInt(prompt("Inserisci un numero da 1 a 3 per la difficoltà, più il numero è alto più sale la difficoltà."));
}



const bomb = [];



//in base alla difficoltà si generano tot quadrati
if (difficultGame === 1) {


    while(bomb.length < 16){

        const num = Math.floor(Math.random() * 100) + 1;
        let sameNum = bomb.includes(num);
    
        if(sameNum === false){
            bomb.push(num)
        }
    }
    console.log(bomb);


    for(let i = 1; i <= 100; i++){
         console.log(i);
        let newElem = createSquare ("div", "square1");

        let num = bomb.includes(i);

        if(num === true){
            console.log("sono uguale");
            newElem.addEventListener("click",
                function(){
                this.classList.add("clicked-false");
                newElem.innerText = `${i}`
            }
            );

        } else if(num === false){
            console.log("non sono uguale");
            newElem.addEventListener("click",
                function(){
                this.classList.add("clicked-true");
                newElem.innerText = `${i}`
            }
            );
        }

        

        grid.appendChild(newElem);

        
    }

    

}else if(difficultGame === 2){


    while(bomb.length < 16){

        const num = Math.floor(Math.random() * 81) + 1;
        let sameNum = bomb.includes(num);
    
        if(sameNum === false){
            bomb.push(num)
        }
    }
    console.log(bomb);


    for(let i = 1; i <= 81; i++){

        let num = bomb.includes(i);

        let newElem = createSquare ("div", "square2");
        
        if(num === true){
            console.log("sono uguale");
            newElem.addEventListener("click",
                function(){
                this.classList.add("clicked-false");
                newElem.innerText = `${i}`
            }
            );

        } else if(num === false){
            console.log("non sono uguale");
            newElem.addEventListener("click",
                function(){
                this.classList.add("clicked-true");
                newElem.innerText = `${i}`
            }
            );
        }

        grid.appendChild(newElem);

    }

}else if(difficultGame === 3){


    while(bomb.length < 16){

        const num = Math.floor(Math.random() * 49) + 1;
        let sameNum = bomb.includes(num);
    
        if(sameNum === false){
            bomb.push(num)
        }
    }
    console.log(bomb);

    for(let i = 1; i <= 49; i++){

        let num = bomb.includes(i);

        let newElem = createSquare ("div", "square3");

        if(num === true){
            console.log("sono uguale");
            newElem.addEventListener("click",
                function(){
                this.classList.add("clicked-false");
                newElem.innerText = `${i}`
            }
            );

        } else if(num === false){
            console.log("non sono uguale");
            newElem.addEventListener("click",
                function(){
                this.classList.add("clicked-true");
                newElem.innerText = `${i}`
            }
            );
        }

        grid.appendChild(newElem);

    }
}





//funzioni

function createSquare (squareGen, classPlus) {
    let nodeHundred = document.createElement(squareGen);
    nodeHundred.classList.add(classPlus);

    return nodeHundred;
}


