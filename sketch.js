var s;
var scl=20;

var food;

function setup() {
    createCanvas(1535,450);
    s = new Snake();
    frameRate(10);
    pickLocation();
    strokeWeight(4);
stroke(51);
rect(20, 20, 60, 60);

}    

function pickLocation(){
    var cols =floor(width/scl);
    var rows =floor(height/scl);
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);

}

function draw(){
    background(51); 
    
     
     
    
    

    if (s.eat(food)) {
        pickLocation();
    }
    s.death();
    
    s.update();
    s.show();



    fill(255,0,100);
    rect(food.x,food.y, scl,scl);
}


function keyPressed(){
    if (keyCode === UP_ARROW){
        s.dir(0, -1);
    }else if (keyCode === DOWN_ARROW){
        s.dir(0, 1);
    }else if (keyCode === RIGHT_ARROW){
        s.dir(1, 0);
    }else if (keyCode === LEFT_ARROW){
        s.dir(-1, 0);    
}

}
