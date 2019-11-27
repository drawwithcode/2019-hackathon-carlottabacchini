let myFont;
var mySong;
var myImage;
let r = 10;
let a = 0;
let c = 20;

let s1 = 120;
let s2 = 240;

let angle = 0;
let angle1 = 0;

let art;

var analyzer;

let p = 0.0;
let s = 0.0;



function preload(){
  myFont = loadFont('assets/Montserrat-Bold.otf');
  mySong = loadSound('sound/TG1_new.mp3')
  myImage = loadImage('assets/logo.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  art = createGraphics(windowWidth,windowHeight);

  analyzer = new p5.Amplitude(); // able to perform measurements on the song and give back values
  analyzer.setInput(mySong);


  let col = color(129,216,208);
  let col2 = color(227,244,244);
  button = createButton('SEE THE NEWS');
  button.style('background-color', col);
  button.style("color", "white");
  button.style("border", "0px");
  button.style("font-size", "10px");
  button.style("font-family", "Montserrat-Bold");
  button.style("padding", "10px");
  button.style("border-radius", "15px");
  button.style("border-style", "solid");
  button.style("border-color", "white");
  button.style("border-width", "2px");
  button.position(windowWidth/2 -50, windowHeight/3 + 400 )

  // button.mouseOver(changeColor)
  //
  // function changeColor() {
  //   button.style('background-color', col2)
  // }

  button.mousePressed(
    function() {
      mySong.play()
})
}

function draw() {

  background(0,3,30);



  volume = analyzer.getLevel();
    volume = map(volume,0,1,0,height);


  push()
  if (mySong.isPlaying()) {
  p = p + 0.02;
  s = p * 1.1;
  translate(0, 0);
  scale(s)
  imageMode(CENTER);
image(myImage, 0, -280, myImage.width / 3, myImage.height / 3)
}
  pop()

push()
  // translate(200,200);

  let x = r+c * cos(a);
  let y = r+c * sin(a);

  art.fill(s1,c, s2);
  art.stroke('white');
  art.strokeWeight(0.5);
  art.ellipse(x + 300, y + 300, 15, 15);

  c += 0.8;
  a += 0.2;

  pop()

  push()
  texture(art);
  stroke("white")
  strokeWeight(0.2);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  sphere(150+volume);


angle += 0.003;
pop()

push()
fill('white');
textFont(myFont)
textSize(30)
text('Breaking News', windowWidth - frameCount*3, 100);
pop()
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
