myText = 'Hello World';

function setup(){
    createCanvas(400, 400);
    frameRate(0.5);
    background(0);
}

function draw(){
    fill(255,0,0)
    textSize(25);
    for (let i = 0; i < myText.length; i++){
        text(myText[i], 20 + i*20, height/2 )
    }
}