const phrase = "Lorem ipsum dolor sit amet"

function setup(){
    createCanvas(600, 600);
}

function draw(){
    background(0, 0, 255);
    fill(255);
    textSize(65);
    textAlign(RIGHT, BOTTOM);
    text(phrase, 280, -20, 300, 600)
}