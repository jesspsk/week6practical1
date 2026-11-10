let font1;
let font2;
let chosenFont;

async function setup(){
    font1 = await loadFont('assets/OpenSans-VariableFont_wdth,wght.ttf');
    font2 = await loadFont('assets/Akronim-Regular.ttf');
    createCanvas(400, 400);
    chosenFont = font1
}

function draw(){
    background(0);
    fill(160, 51, 250);
    stroke(255, 160, 15);
    strokeWeight(3);
    textSize(25);
    textAlign(CENTER);
    textFont(chosenFont);
    text('Lorem ipsum dolor sit amet', 200, 200);
}

function keyPressed(){
    if (key === 'f' && chosenFont === font1){
        chosenFont = font2
    } else if (key=== 'f' && chosenFont === font2){
        chosenFont = font1
    }
}