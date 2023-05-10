// Grab scoreboard items

var guestScore = document.getElementById("guest-score");
var homeScore = document.getElementById("home-score");
var Score1 = 0;
var Score2 = 0;

function addOneHome(){
    Score1 ++;
    homeScore.textContent = Score1;
}
function addTwoHome(){
    Score1 += 2;
    homeScore.textContent = Score1;
}
function addThreeHome(){
    Score1 += 3;
    homeScore.textContent = Score1;
}
function addOneGuest(){
    Score2 ++;
    guestScore.textContent = Score2;
}
function addTwoGuest(){
    Score2 += 2;
    guestScore.textContent = Score2;
}
function addThreeGuest(){
    Score2 += 3;
    guestScore.textContent = Score2;
}

function save(){
    if(Score1 > Score2){
     
        document.getElementById("container").style.display = 'none';
        document.getElementById("results").style.display = 'flex';
        document.getElementById("result-text").textContent = "The winner is Home Team!";

    }
    else if(Score1 < Score2){
        document.getElementById("container").style.display = 'none';
        document.getElementById("results").style.display = 'flex';
        document.getElementById("result-text").textContent = "The winner is Guest Team!";
    }
    else{
        document.getElementById("container").style.display = 'none';
        document.getElementById("results").style.display = 'flex';
        document.getElementById("result-text").textContent = "It's a Draw match!";
    }
}


function returnGame(){
    document.getElementById("container").style.display = 'flex';
    document.getElementById("results").style.display = 'none';
    

}




function reset(){
    homeScore.textContent = "0"
    guestScore.textContent = "0"

    return Score1 = 0,
            Score2 = 0;
    
}
