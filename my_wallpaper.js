let x;                 //x variable set for grass code
let y;                 //y variable set for grass code
let grasslength;
let nature;
let spacing;
let petallength;
let rotation;
let segments;
let petals;
grasslength = 3        //grasslength defines how much longer from smallest length (best between 0-5)
nature = 1             // the diagonal orientation which makes it sort of look like a random spread for each number.
spacing = 48           //spacing between grass. This is also influences the amount of grass patches shown as the grass loop stops with respect to the spacing and canvas size. (best between 30 and up). !!under 30 crashes my page loll.
petallength = 10       //length of petals (best between -10 and 10)
rotation = 30           //bee rotation around flower in degrees. Bee always stays above flower, so when exceeding 90 degrees and under 270, y-axis flips so that it stays upright and happy :D. This is also a variable set for the bug too
petals = 20            //angle between petals (best between 15-60)
segments = 0           //the counter to stop petal loop after one revolution

function setup_wallpaper(pWallpaper) {  
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); 

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}
function wallpaper_background() {
  background(205,246,68); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
drawingContext.setLineDash([0.5]); 
angleMode(DEGREES)

for(let x = 5-4*nature; x <= 200; x = x +spacing) {  //variable set, condition for loop, final action 
  for(let y = 10; y <= 200; y = y + spacing) {

    drawingContext.setLineDash([0.7]);  //
   noFill();
   strokeWeight(1);
   strokeCap(ROUND)//no point in this but good to include anyway lmao
   stroke(93,117,29,100)

   //leftmostblade
   beginShape(); 
   curveVertex (x+5,y+9-grasslength)
   
   curveVertex (x+11,y+11-grasslength)
   curveVertex (x+12,y+14)
   
   curveVertex (x+10,y+24)
   endShape();

   //middle blade
   beginShape();
   strokeJoin(BEVEL);
   strokeWeight(1);
   strokeCap(ROUND);

   vertex (x+12,y+5-grasslength)
   vertex (x+14,y+7)
   vertex (x+15,y+15) 
   endShape();

   //finalblade
   beginShape();
   strokeJoin(ROUND);
   strokeWeight(0.8)
   strokeCap(ROUND)

   vertex (x+20,y+10-grasslength)
   vertex (x+17,y+12)
   vertex (x+16,y+14)
   endShape();

//secondary line of grass with offset
      //leftmostblade
      beginShape(); 
      curveVertex (x+5 +(spacing/2),y+9-grasslength + (spacing/2))
      
      curveVertex (x+11+(spacing/2),y+11-grasslength+(spacing/2))
      curveVertex (x+12+(spacing/2),y+14+(spacing/2))
      
      curveVertex (x+10+(spacing/2),y+24+(spacing/2))
      endShape();

      //middle blade
      beginShape();
      strokeJoin(BEVEL);
      strokeWeight(1);
      strokeCap(ROUND);

      vertex (x+12+(spacing/2),y+5-grasslength+(spacing/2))
      vertex (x+14+(spacing/2),y+7+(spacing/2))
      vertex (x+15+(spacing/2),y+14+(spacing/2)) 
      endShape();

      //finalblade
      beginShape();
      strokeJoin(ROUND);
      strokeWeight(0.8)
      strokeCap(ROUND)

      vertex (x+20+(spacing/2),y+10-grasslength+(spacing/2))
      vertex (x+17+(spacing/2),y+12+(spacing/2))
      vertex (x+16+(spacing/2),y+14+(spacing/2))
      endShape();

     x = x + nature  // is the diagonal setting to make it look random


  }

}

strokeWeight(3);        //stem and leaf WAA NCEA jumpscare
stroke (93,117,29,150)
beginShape();
curveVertex(100,100)
curveVertex(100,100)

curveVertex (125,140)
curveVertex (125,170)

curveVertex(110,200)
curveVertex(110,200)
endShape();

push();  //first leaf
strokeWeight(1);
fill(93,137,29,255)

beginShape();
curveVertex(125,170)
curveVertex(125,170)

curveVertex(140,160)

curveVertex(150,140)
curveVertex(150,140)
endShape();

beginShape();
curveVertex(125,170)
curveVertex(125,170)

curveVertex(135,155)

curveVertex(150,140)
curveVertex(150,140)
endShape();
pop();

push();  //second leaf
scale(-1,1)
translate (-250,-10)
strokeWeight(1);
fill(93,137,29,255)

beginShape();
curveVertex(125,170)
curveVertex(125,170)

curveVertex(140,160)

curveVertex(150,150)
curveVertex(150,150)
endShape();

beginShape();
curveVertex(125,170)
curveVertex(125,170)

curveVertex(135,155)

curveVertex(150,150)
curveVertex(150,150)
endShape();
pop();



//FLOWER  //PARAMETERS FOR segment
push();
PETAL = petals
SEGMENT = segments
translate (100,100) //centre properties
strokeWeight(2)


strokeWeight(0.5);  //petal properties and value definition
while (SEGMENT < 360/PETAL) {
  rotate(PETAL);
  fill(255);
  strokeWeight(1);
  ellipse (0,-15-(petallength/2),5+(petallength/10),20+petallength)
  SEGMENT = SEGMENT + 1
}

fill (255,255,0)
ellipse (0,0,10,10)
pop();

//Making the bee

push();
translate (100,100) 

rotate (rotation)  //IF STATEMENT IS HERE
if(rotation < 270) {
  scale(1,-1) //if the rotation is more than less than 270, then the y-axis flips so that the bee stays upright
} else {

  scale(1,1)

}

if(rotation > 90) {
  scale(1,1) //similarly, if the rotation is more than 90, 
} else {

  scale(1,-1)

}
  
  push(); //bee trail - this took way too long ahah
  drawingContext.setLineDash([5])
  stroke
  strokeWeight (2)
  arc(35,0,140,140,270,300)
  pop();
  push();
  drawingContext.setLineDash([7]);   //second part of line
  strokeWeight(2)
  translate (140,-60.62*2)
  scale(-1,-1)
  arc(35,0,140,140,280,300)
  pop();


  drawingContext.setLineDash([0]); //wings
  fill(255,255,255,200)
  stroke(200,218,168,230);
  strokeWeight(1)
  beginShape();
  curveVertex(-3,-80)
  curveVertex(-3,-80)

  curveVertex (-15,-90)
  curveVertex (-15,-105)
  curveVertex (-3,-102)

  curveVertex(6,-75)
  curveVertex(6,-75)
  endShape();
  
  push();
  scale (-1,1)
  translate (2,-2)
  beginShape();
  curveVertex(-3,-80)
  curveVertex(-3,-80)

  curveVertex (-15,-90)
  curveVertex (-15,-105)
  curveVertex (-3,-102)

  curveVertex(6,-75)
  curveVertex(6,-75)
  endShape();
  pop();

  push();  //legs
  noFill();
  strokeWeight(2)
  stroke(105,114,69,230)
  beginShape();  
  vertex(-5,-53)
  vertex(-7,-47)
  vertex(-4,-45)
  endShape();
  beginShape();  
  vertex(0,-53)
  vertex(-2,-47)
  vertex(1,-45)
  endShape();
  beginShape();  
  vertex(8,-53)
  vertex(6,-47)
  vertex(8,-45)
  endShape();
  pop();

  drawingContext.setLineDash([1]);
  stroke(101,109,70,220);
  strokeWeight (1.7)
  fill(101,120,70)
  beginShape();  //stingaa
  vertex(0,-60)
  vertex(35,-70)
  vertex(0,-80)
  endShape();


  stroke (105,114,69,230) //BEE so cute <3 its body
  fill(253,252,38)
  rectMode(CENTER)
  rect(0,-70,50,40,20)

  strokeWeight (1.5) //face
  point (-20,-70)
  point (-10,-70)
  strokeWeight(1)
  drawingContext.setLineDash([]);
  arc(-15,-76,15,15,76,104)


  strokeWeight(4);          //stripes awww
  stroke (105,114,69,220)
  strokeCap(SQUARE)
  beginShape();

  curveVertex(-3,-90)
  curveVertex(-3,-90)
  curveVertex(-1,-75)
  curveVertex(-1,-65)
  curveVertex(-3,-50)
  curveVertex(-3,-50)
  
  endShape();

  strokeWeight(4);
  beginShape();         //copied stripes but translated to the right

  curveVertex(6,-90)
  curveVertex(6,-90)
  curveVertex(8,-75)
  curveVertex(8,-65)
  curveVertex(7,-50)
  curveVertex(7,-50)
  
  endShape();
  pop();
  
  drawingContext.setLineDash([0]); //another bug that is being chased lol or chasing!?
  push();
  translate (100,100)  
  
  
rotate (rotation-70)  //IF STATEMENT IS HERE for BUG. When flipped with bee, the bug fights back by chasing the bee. 
if(rotation < 270) {
  scale(1,-1) //if the rotation is more than less than 270, then the y-axis flips 
} else {

  scale(1,1)

}

if(rotation > 90) {
  scale(1,1) //similarly, if the rotation is more than 90, then bug flips
} else {

  scale(1,-1)

}



  fill(255,255,255,210)     //wing 1
  stroke(230,255,240,255);
  strokeWeight(1)
  strokeCap (SQUARE)
  beginShape();
  curveVertex(-3,-80)
  curveVertex(-3,-80)

  curveVertex (-15,-90)
  curveVertex (-15,-105)
  curveVertex (-3,-102)

  curveVertex(0,-80)
  curveVertex(0,-80)
  endShape();

  push();
  stroke (99,108,138)  //body
  fill (144,124,156,255)
  strokeWeight(1);
  rectMode(CENTER);
  rect (4,-75.6,35,7,5)
  ellipse (-13,-76,12,12)

  stroke(58,48,64,180);
  strokeWeight(1.5);
  point (-17,-78)
  point (-11, -78)
  strokeWeight(0.5)
  line (-15,-76,-13,-76)
  pop();

  
  
  push();
  scale (-1,1)  //second wing just a copy but flipped. 
  translate (-12,0)
  beginShape();
  curveVertex(-3,-80)
  curveVertex(-3,-80)

  curveVertex (-15,-90)
  curveVertex (-15,-105)
  curveVertex (-3,-102)

  curveVertex(10,-75)
  curveVertex(10,-75)
  endShape();
  pop();
  pop();

  
  

}



