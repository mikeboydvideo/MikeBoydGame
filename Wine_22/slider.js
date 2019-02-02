function Slider() {

  pitch = mouseX;
  if (mouseX >= width - 80) {
    pitch = width - 80
  } else if (mouseX <= 80) {
    pitch = 80
  }
  stroke(80);
  strokeWeight(4);
  line(80, height - 30, width-80, height-30);
  //stroke(0);
  //fill(80);
  strokeWeight(1);
  ellipse(pitch, height-30, 12);

}
