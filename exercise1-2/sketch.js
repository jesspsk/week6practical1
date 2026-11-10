let font1;
let font2;
let loadedFont;

async function setup(){
    font1 = await loadFont(assets/Kablammo-Regular-VariableFont_MORF.ttf);
    font2 = await loadFont(assets/Akronim-Regular.ttf);
    createCanvas(400, 400);
}

function draw(){
    textFont(loadedFont)
    text('Lorem ipsum dolor sit amet');
}

function keyPressed(){
    if (key === 'z' && loadedFont === font1){
        loadedFont = font2
    } else if (key=== 'z' && loadedFont === font2){
        loadedFont = font1
    }
}