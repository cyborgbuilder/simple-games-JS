function ageInDays(){
    var birthYear = prompt("Enter Your Birthday");
    var ageInDays = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var text = document.createTextNode("You are " + ageInDays + " days old.");
    h1.appendChild(text);
    h1.setAttribute("id", "ageInDays")
    document.getElementById("result").appendChild(h1);
}

function reset(){
    document.getElementById("ageInDays").remove();
}

// Game 02

function generateCat(){
    var div = document.getElementById('imgBody');
    var image = document.createElement('img');
    image.src = "https://media.istockphoto.com/photos/grey-stripped-mixedbreed-cat-sitting-isolated-on-white-picture-id1217828258?b=1&k=20&m=1217828258&s=170667a&w=0&h=jVuou3wnJ1x7eLf0iWS53BvA5ZOyROTBfiTM3tPhD4g=";
    image.setAttribute('id', 'imgToReset');
    div.appendChild(image);
}

function resetCat(){
    document.getElementById('imgToReset').remove();
}



// Game 03



function rpsGame(select){
    var yourChoice = select.id;
    var botChoice = getBotChoice();
    var winScore = decideWinner(yourChoice, botChoice);
    var message = getMessage(winScore);
    frontEnd(message, yourChoice, botChoice);
}

function getBotChoice(){
    var arrayImg = ["rock", "paper", "scissors"];
    return arrayImg[Math.floor(Math.random() * 3)];
}

function decideWinner(yourChoice, botChoice){
    var winner = {
        "rock": {"paper":0, "rock":0.5, "scissors":1 },
        "paper": {"scissors":0, "paper":0.5, "rock":1},
        "scissors": {"rock":0, "scissors":0.5, "paper":1}
    }

    return winner[yourChoice][botChoice];
    
}

function getMessage(score){
    if(score === 0){
        return {"message":"You Lost", "color": "red"};
    }else if(score === 0.5){
        return {"message":"Match Drawn", "color": "black"};
    }else if(score === 1){
        return {"message":"You Won", "color": "green"};
    }
}

function frontEnd(message, humanChoice, computerChoice){
    var imgDataBase = {
        "rock": document.getElementById('rock').src ,
        "paper": document.getElementById('paper').src , 
        "scissors": document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var botDivs = document.createElement('div');
    var image02 = document.createElement('img');
    image02.src = imgDataBase[computerChoice];
    botDivs.appendChild(image02);
    document.getElementById('rpsBody').appendChild(botDivs);


    var div01 = document.createElement('div');
    div01.innerHTML = "<h1 style=color:"+ message['color'] + ">" + message['message'] + "</h1>"
    
    
    //var h1 = document.createElement('h1');
    //var text = document.createTextNode(message);
    //h1.appendChild(text);
    //div01.appendChild(h1);
    document.getElementById('rpsBody').appendChild(div01);

    var humanDiv = document.createElement('div');
    var image = document.createElement('img');
    image.src = imgDataBase[humanChoice];
    humanDiv.appendChild(image);
    document.getElementById('rpsBody').appendChild(humanDiv);
    
  

}



// Game 04

function buttonColorChange(btnThingy){
    if(btnThingy.value === 'red'){
        changeRedColor();
    }else if(btnThingy.value === 'green'){
        changeColorGreen();
    }else if(btnThingy.value === 'reset'){
        colorReset();
    }else if(btnThingy.value === 'random'){
        colorRandom();
    }
}

var btns = document.getElementsByTagName('button');
//console.log(btns[0].classList[1]);
function changeRedColor(){
    for(let i=0;i<btns.length;i++){
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add('btn-danger');
    }
}

function changeColorGreen(){
    for(let i=0;i<btns.length;i++){
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add('btn-success');
    }
}

function colorRandom(){
    let colorDataBase = ['btn-danger', 'btn-success', 'btn-primary', 'btn-warning'];
    for(let i=0;i<btns.length;i++){
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add(colorDataBase[Math.floor(Math.random() * 4)]);
    }
}

let copyBtnClasses = [];
for(let i=0;i<btns.length;i++){
    copyBtnClasses[i] = btns[i].classList[1];
}

function colorReset(){
    for(let i=0;i<btns.length;i++){
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add(copyBtnClasses[i]);
    }
    
}