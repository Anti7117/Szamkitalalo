const solution = Math.floor(Math.random()*100)+1

const guess = document.getElementById("guess")

function TippClicked(){
    let guess = guessEl.value * 1

    if (guess < solution)
    {
        alert("👳🏿‍♂️")
    }else if(guess > solution){
        alert("👳🏿‍♀️")
    }else{
        alert("💣")
    }
}