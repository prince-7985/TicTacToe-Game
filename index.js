console.log("Welcome to Tic Tac Toe")
// let music = new Audio("music.mp3")
let audioTurn = new Audio("tone.mp3")
// let gameover = new Audio("gameover.mp3")
let turn = "X";
let isgameover =false;
let reset=document.querySelector('.btn')

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 3, 6, 0],
        [3, 4, 5, 3, 18, 0],
        [6, 7, 8, 3, 30, 0],
        [0, 3, 6, -9, 17, 90],
        [1, 4, 7, 3, 17, 90],
        [2, 5, 8, 15, 18, 90],
        [0, 4, 8, 5, 20, 42],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "30vw";
            isgameover=true;
            console.log(isgameover);
            
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');    
        element.addEventListener('click', (e)=>{
            if(isgameover){
            e.preventDefault();
            e.stopPropagation();
            }
            else{
                console.log("clicked");
                if(boxtext.innerText === ''){
                    boxtext.innerText = turn;
                    turn = changeTurn();
                    audioTurn.play();
                    checkWin();
                    console.log("in box ",isgameover);
                    if (!isgameover){
                        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
                    } 
                }
            }
           
        })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

