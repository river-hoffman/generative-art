function setup() {
    createCanvas(500, 500);
}

function gArt() {
    let c = createCanvas(500, 500)
    bgColor = color(random(255), random(255), random(255));
    background(bgColor);
    let x = random(50000);
    for (let i = 0; i < x; i++) {
        let shapes = ['circle', 'rect', 'tri', 'quad', 'skip','pass', 'blank'];
        let shape = random(shapes);
        drawShape(shape);
    }
    saveCanvas(c, 'generative-art', 'png');
}

function drawShape(choice) {
    x = random(width);
    y = random(height);
    w = random(1000);
    h = random(1000);
    r = random(100);
    x1 = random(width);
    x2 = random(width);
    x3 = random(width);
    x4 = random(width);
    y1 = random(height);
    y2 = random(height);
    y3 = random(height);
    y4 = random(height);
    
    if (choice == 'circle'){
        let g = random(2);
        
        if (g == 2){
            stroke(random(255), random(255), random(255), random(255), random(255), random(255));
        }
        else{
            noStroke();
        }
        fill(random(255), random(255), random(255), random(255));
        ellipse(x, y, w, h);
    }
    else if (choice == 'rect'){
        let g = random(2);
        if (g == 2){
            stroke(random(255), random(255), random(255), random(255), random(255), random(255));
        }
        else{
            noStroke();
        }
        fill(random(255), random(255), random(255), random(255));
        rect(x, y, w, h, r);
    }
    else if (choice == 'tri'){
        let g = random(2);
        if (g == 2){
            stroke(random(255), random(255), random(255), random(255), random(255), random(255));
        }
        else{
            noStroke();
        }
        fill(random(255), random(255), random(255), random(255));
        triangle(x1, y1, x2, y2, x3, y3);
    }
    else if (choice == 'quad'){
        noSmooth();
        let g = random(2);
        if (g == 2){
            stroke(random(255), random(255), random(255), random(255), random(255), random(255));
        }
        
        else{
            noStroke();
        }
        fill(random(255), random(255), random(255), random(255));
        quad(x1, y1, x2, y2, x3, y3, x4, y4);
    }
    else{}

}
