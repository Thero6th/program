var diam1 = 0;

function setup() {
  // put setup code here
    createCanvas(500, 500);
}

function draw() {
  // put drawing code here
    background("#e2d116");
    fill("#c41da2");
    stroke("#3acde8");
    strokeWeight(10);
    ellipse(150,225,50,50);
    ellipse(350,225,50,50);
    fill("#FF0000");
    noStroke();
    ellipse(250, 350, diam1, diam1);
    
    textSize(40);
    textFont("Verdana");
    textStyle(ITALIC);
    text("Move to stretch my face!", 0, 100);
    textSize(40);
    textFont("Verdana");
    text("click to open my mouth!", 0, 400);
    textSize(8)
    textFont("Verdana");
    text("clicking too much will shut me up", 180, 490);
    noFill();
    stroke("#FF0000");
    strokeWeight(20);
    ellipse(250,250,mouseX,mouseY);         
}
function mousePressed() {
    if (diam1 > 50) {
        diam1 = 0;
    } else {
        diam1 = diam1 + 5;
    }
}