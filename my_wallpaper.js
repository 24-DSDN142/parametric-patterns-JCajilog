//your parameter variables go here!
let rect_width  = 30;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);
  
  angleMode (DEGREES)
  let Dpetallength = 130
  let petalLength = sqrt(sq(100-Dpetallength)+sq(100-Dpetallength))
  
  //x-shape
  //petal 1

  if (petalLength < 50) {
  fill(255)
  } else {
  fill(236, 211, 245)
  }
  stroke(220,100,100);
  strokeWeight(1);

  beginShape();
 curveVertex(0,0)

  curveVertex(Dpetallength,Dpetallength)
  curveVertex(100,100)

  curveVertex(50,150)
  endShape();

  beginShape();
 curveVertex(0,0)

  curveVertex(Dpetallength,Dpetallength)
  curveVertex(100,100)

  curveVertex(150,50)
  endShape();
  
  //petal 3

  beginShape();
 curveVertex(200,0)

  curveVertex(200-Dpetallength,Dpetallength)
  curveVertex(100,100)

  curveVertex(50,50)
  endShape();

  beginShape();
 curveVertex(200,0)

  curveVertex(200-Dpetallength,Dpetallength)
  curveVertex(100,100)

  curveVertex(150,150)
  endShape();

  //petal 5

  beginShape();
 curveVertex(200,200)

  curveVertex(200-Dpetallength,200-Dpetallength)
  curveVertex(100,100)

  curveVertex(50,200-50)
  endShape();

  beginShape();
 curveVertex(200,200)

  curveVertex(200-Dpetallength,200-Dpetallength)
  curveVertex(100,100)

  curveVertex(150,200-150)
  endShape();
  
  //petal 7

  beginShape();
 curveVertex(0,200)

  curveVertex(Dpetallength,200-Dpetallength)
  curveVertex(100,100)

  curveVertex(50,200-150)
  endShape();

  beginShape();
 curveVertex(0,200)

  curveVertex(Dpetallength,200-Dpetallength)
  curveVertex(100,100)

  curveVertex(150,200-50)
  endShape();
  
  //cross

  beginShape();
 curveVertex(0,100)

  curveVertex(100-petalLength,100)
  curveVertex(100,100)

  curveVertex(100,150)
  endShape();

  beginShape();
 curveVertex(0,100)

  curveVertex(100-petalLength,100)
  curveVertex(100,100)

  curveVertex(100,50)
  endShape();
  
  // next

  
  beginShape();
 curveVertex(100,0)

  curveVertex(100,100-petalLength)
  curveVertex(100,100)

  curveVertex(50,100)
  endShape();
  
  beginShape();
 curveVertex(100,0)

  curveVertex(100,100-petalLength)
  curveVertex(100,100)

  curveVertex(150,100)
  endShape();

  beginShape();
 curveVertex(200,100)

  curveVertex(100+petalLength,100)
  curveVertex(100,100)

  curveVertex(100,150)
  endShape();

  beginShape();
 curveVertex(200,100)

  curveVertex(100+petalLength,100)
  curveVertex(100,100)

  curveVertex(100,50)
  endShape();

  beginShape();
 curveVertex(100,200)

  curveVertex(100,100+petalLength,)
  curveVertex(100,100)

  curveVertex(150,100)
  endShape();

  beginShape();
 curveVertex(100,200)

  curveVertex(100,100+petalLength,)
  curveVertex(100,100)

  curveVertex(50,100)
  endShape();

  //centre
  fill(255,255,0)
  ellipse(100,100,10,10)



  let x = 20
  let y = 0
  push();
  
  strokeWeight(0.2)
  fill (200,170,30)
  //stroke(0)
  ellipse (0,0,10,10)

  strokeWeight(0.5);
  while (y < 360/x) {
    
    
    rotate(x);
    fill(255);
    ellipse (0,-15,5,20)
  
    y = y + 1
  }
  pop();

}
