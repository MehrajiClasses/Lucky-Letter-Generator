const letter = document.querySelector("#letter");
const startButton = document.querySelector(".start-btn");
const heading = document.querySelector("h1");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let i=0;
function showLetters(){
    letter.innerHTML = `${letters[i]}`
    i++;
}


startButton.addEventListener("click",()=>{
    const randomLetter = letters[Math.floor(Math.random()*letters.length)];

    const myInterval = setInterval(()=>{
        showLetters();
        if(letter.innerHTML === randomLetter){
            clearInterval(myInterval);
            heading.innerHTML = `Your Lucky Letter is ${letter.innerHTML}`;
            startButton.innerHTML = `ReStart`;
            i = 0;
        }
    },100);

  heading.innerHTML = `Check Your Lucky Letter`;
})
