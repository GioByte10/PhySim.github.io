let n = 20;
let objects = [];
let r = 10;

let fps = 60;

function setup(){

    createCanvas(windowWidth, windowHeight);
    background(220);
    textSize(20);
    frameRate(fps);

    if(navigator.userAgent.match(/iPhone|iPod|Android|BlackBerry|Windows Phone/i))
        pixelDensity(1);

    for(let i = 0; i < n; i++)
        if(i < n / 3)
            objects.push(new object(random(width), random(height), '🪨'));

        else if(i < 2 * n / 3)
            objects.push(new object(random(width), random(height), '📜'));

        else
            objects.push(new object(random(width), random(height), '✂️'));

}

function draw(){

    background(255);

    for(let i = 0; i < objects.length; i++)
        objects[i].update();


}

class object{
    constructor(x, y, emoji){
        this.x = x;
        this.y = y;
        this.emoji = emoji;
    }

    update(){
        this.x += random(-3, 3);
        this.y += random(-3, 3);

        text(this.emoji, this.x, this.y);
    }
}