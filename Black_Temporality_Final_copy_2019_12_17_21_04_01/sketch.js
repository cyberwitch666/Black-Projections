// Black Portal Interface
// Final Project for Physical Computation
// ITP 2019
// Final Project by Cy X www.cyberwitch666.com

var serial;          // variable to hold an instance of the serialport library
var portName = '/dev/tty.usbmodem143401'; // fill in your serial port name here
var stringFromSerial;  // for incoming serial data
let fr = 1/2;


let Node1 = [];
let Node2 = [];
let Node3 = [];
let Node4 = [];
let Node5 = [];
let Node6 = [];
let Node7 = [];
let Node8 = [];
let Node9 = [];
let Node10 = [];
let Node11 = [];
let Node12 = [];
let Node13 = [];
let Node14 = [];

let reed1 = 1;
let reed2 = 1;
let reed3 = 1;
let reed4 = 1;
let reed5 = 1;
let reed6 = 1;
let reed7 = 1;
let reed8 = 1;
let reed9 = 1;
let reed10 = 1;
let reed11 = 1;
let reed12 = 1;
let reed13 = 1;
let reed14 = 1;

let xoff = 0.3;


function preload() {
  Node1[0] = loadImage('photos/Node1a.jpg');
  Node1[1] = loadImage('photos/Node1b.png');
  
  Node2[0] = loadImage('photos/Node2a.png');
  Node2[1] = loadImage('photos/Node2b.png');
  
  Node3[0] = loadImage('photos/Node3a.png');
  Node3[1] = loadImage('photos/Node3b.png');
  
  Node4[0] = loadImage('photos/Node4a.png');
  Node4[1] = loadImage('photos/Node4b.jpg');
  Node4[2] = loadImage('photos/Node4c.jpg');
  Node4[3] = loadImage('photos/Node4c.png');
  Node4[4] = loadImage('photos/Node4d.jpg');
  Node4[5] = loadImage('photos/Node4e.png');


  
  Node5[0] = loadImage('photos/Node5a.png');
  Node5[1] = loadImage('photos/Node5b.png');
  Node5[2] = loadImage('photos/Node5c.png');
  Node5[3] = loadImage('photos/Node5d.jpg');
  Node5[4] = loadImage('photos/Node5e.jpg');
  Node5[5] = loadImage('photos/Node5f.png');

  
  Node6[0] = loadImage('photos/Node6a.gif'); 
  Node6[1] = loadImage('photos/Node6b.jpg');
  Node6[2] = loadImage('photos/Node6c.png');
  Node6[3] = loadImage('photos/Node6d.png');
  Node6[4] = loadImage('photos/Node6e.png');
  Node6[5] = loadImage('photos/Node6f.jpg');
  
  
  Node7[0] = loadImage('photos/Node7a.gif');
  Node7[1] = loadImage('photos/Node7b.gif');
  Node7[2] = loadImage('photos/Node7c.jpg');
  Node7[3] = loadImage('photos/Node7d.jpg');
  Node7[4] = loadImage('photos/Node7e.jpg');
  
  Node8[0] = loadImage('photos/Node8a.gif');
  Node8[1] = loadImage('photos/Node8b.png');
  Node8[2] = loadImage('photos/Node8c.png');
  Node8[3] = loadImage('photos/Node8d.jpg');


  
  Node9[0] = loadImage('photos/Node9a.gif'); 
  Node9[1] = loadImage('photos/Node9b.jpg');
  Node9[2] = loadImage('photos/Node9c.png');
  Node9[3] = loadImage('photos/Node9d.jpg');
  Node9[4] = loadImage('photos/Node9e.jpg');
  Node9[5] = loadImage('photos/Node9f.png');


  
  Node10[0] = loadImage('photos/Node10a.gif'); 
  Node10[1] = loadImage('photos/Node10b.jpg');
  Node10[2] = loadImage('photos/Node10c.jpg');
  Node10[3] = loadImage('photos/Node10d.png');
  Node10[4] = loadImage('photos/Node10e.jpg');
  Node10[5] = loadImage('photos/Node10f.jpg');



  
  Node11[0] = loadImage('photos/Node11a.gif'); 
  Node11[1] = loadImage('photos/Node11b.jpg');
  Node11[2] = loadImage('photos/Node11c.jpg');
  Node11[3] = loadImage('photos/Node11d.png');
  Node11[4] = loadImage('photos/Node11e.jpg');

  
  Node12[0] = loadImage('photos/Node12a.gif');
  Node12[1] = loadImage('Node12b.gif');
  Node12[2] = loadImage('photos/Node12c.png');
  Node12[3] = loadImage('photos/Node12d.jpg');
  Node12[4] = loadImage('photos/Node12e.png');



  Node13[0] = loadImage('photos/Node13a.gif'); 
  Node13[1] = loadImage('photos/Node13b.gif'); 
  Node13[2] = loadImage('photos/Node13c.gif'); 
  
  Node14[0] = loadImage('photos/Node14a.gif'); 
  Node14[1] = loadImage('photos/Node14b.gif'); 
  Node14[2] = loadImage('photos/Node14c.png');
  Node14[3] = loadImage('photos/Node14d.png');

 
}

function setup() {
 createCanvas(windowWidth, windowHeight);          // make the canvas
 serial = new p5.SerialPort();    // make a new instance of the serialport library
 serial.on('data', serialEvent);  // callback for when new data arrives

 serial.list(); // list the serial ports
 serial.open(portName);           // open a serial port
 frameRate(fr);
}

function draw() {
  background('black');
  fill('white');
  textFont("Noto Serif");
  textSize(width/6);
  imageMode(CENTER);
  
   
  if (reed1 == 0) {
    let imgs1 = random(Node1);
    image(imgs1, windowWidth/2, windowHeight/2);
    stroke('grey');
    fill('black');
    text("Future", windowWidth/4, windowHeight);
  }
  // } else if (reed2 == 0) {
  //   let imgs2 = random(Node2);
  //   image(imgs2, windowWidth/2, windowHeight/2);
  //   text("Now", windowWidth/4, windowHeight);
  else if (reed3 == 0) {
    let imgs3 = random(Node3);
    image(imgs3, windowWidth/2, windowHeight/2);
    text("Past", windowWidth/4, windowHeight);
  } else if (reed4 == 0) {
    let imgs4 = random(Node4);
    image(imgs4, windowWidth/2, windowHeight/2);
    noStroke();
    fill('white');
    text("           Surveillance", windowWidth/4, windowHeight);
  } else if (reed5 == 0) {
    let imgs5 = random(Node5);
    image(imgs5, windowWidth/2, windowHeight/2);
    text("Master", windowWidth/4, windowHeight);
  } else if (reed6 == 0) {
    let imgs6 = random(Node6);
    image(imgs6, windowWidth/2, windowHeight/2);
    text("Field",windowWidth/4, windowHeight);
  } else if (reed7 == 0) {
    let imgs7 = random(Node7);
    image(imgs7, windowWidth/2, windowHeight/2);
    text("      Spirituals", windowWidth/4, windowHeight);
  } else if (reed8 == 0) {
    let imgs8 = random(Node8);
    image(imgs8, windowWidth/2, windowHeight/2);
    text("Nature", windowWidth/4, windowHeight);
  } else if (reed9 == 0) {
    let imgs9 = random(Node9);
    image(imgs9, windowWidth/2, windowHeight/2);
    text("  Science", windowWidth/4, windowHeight);
  } else if (reed10 == 0) {
    let imgs10 = random(Node10);
    image(imgs10, windowWidth/2, windowHeight/2);
    text("Magic", windowWidth/4, windowHeight);
  } else if (reed11 == 0) {
    let imgs11 = random(Node11);
    image(imgs11, windowWidth/2, windowHeight/2);
    text("     Invasion",windowWidth/4, windowHeight);
  } else if (reed12 == 0) {
    let imgs12 = random(Node12);
    image(imgs12, windowWidth/2, windowHeight/2);
    text("  Climate", windowWidth/4, windowHeight);
  } else if (reed13 == 0) {
    let imgs13 = random(Node13);
    image(imgs13, windowWidth/2, windowHeight/2);
    text("Sun",windowWidth/4, windowHeight);
  } else if (reed14 == 0) {
    //textAlign(CENTER);
    let x, y;
    x = width/2;
    y = height/2;
    stroke('grey');
    fill('black');
    x += random(-5, 5);
    y += random(-5, 5);
    ellipse(x, y, windowWidth/3, windowHeight);
    let imgs14 = random(Node14);
    image(imgs14, windowWidth/2, windowHeight/2);
    text("Pluto", windowWidth/4, windowHeight);
  } else {
    textAlign(CENTER);
    textSize(width/10);
    text("Black Projections", windowWidth/2, windowHeight/2);
    

    stroke('white');
    xoff = xoff + 1;
    let n = noise(xoff) * width;
    line(n, 0, n, height)
  }
}
  
function serialEvent() {
  var stringFromSerial = serial.readLine();    // reads everything till the new line charecter
  if (stringFromSerial.length > 0) {           
    var trimmedString = trim(stringFromSerial);  // get rid of all white space
    var myArray = split(trimmedString, ",")      // splits the string into an array on commas
    reed1 = Number(myArray[0]);  
    reed2 = Number(myArray[1]);
    reed3 = Number(myArray[2]);
    reed4 = Number(myArray[3]);
    reed5 = Number(myArray[4]);
    reed6 = Number(myArray[5]);
    reed7 = Number(myArray[6]);
    reed8 = Number(myArray[7]);
    reed9 = Number(myArray[8]);
    reed10 = Number(myArray[9]);
    reed11 = Number(myArray[10]);
    reed12 = Number(myArray[11]);
    reed13 = Number(myArray[12]);
    reed14 = Number(myArray[13]);
  }
}


