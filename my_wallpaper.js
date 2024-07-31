//your parameter variables go here!
let x; //degree from each petal segment
let y; //counter for petal segment. To allow the function to stop after completing a revolution. 
let grasslength;
let nature;
let spacing;
grasslength = 2 //grasslength defines how much longer from smallest length
nature = 1  //Randomness factor for grass spread. Jokes, it's the diagonal orientation which makes it look like a random spread.
spacing = 70  //spacing between grass

angleMode (DEGREES)
 
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A4);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}
function wallpaper_background() {
  background(205,246,68); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
drawingContext.setLineDash([0.5]);

for(let x = 10-4*nature; x <= 200; x = x +spacing) {  //when moving this code, we will change 550 to respective canvas size and the increment
  for(let y = 20; y <= 200; y = y + spacing) {

    drawingContext.setLineDash([0.7]);
   noFill();
   strokeWeight(1);
   strokeCap(ROUND)//no point in this but good to include anyway lmao
   stroke(93,117,29,150)

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

//secondary line
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

     x = x + nature  // is a diagonal setting


  }

}


//FLOWER
push();
x =20
y =0
translate (100,100) //centre properties
strokeWeight(2)
fill (255,255,0)
ellipse (0,0,10,10)

strokeWeight(0.5);  //petal properties and value definition
while (y < 360/x) {
  rotate(x);
  fill(255);
  strokeWeight(1);
  ellipse (0,-15,5,20)
  y = y + 1
}
pop();


}



