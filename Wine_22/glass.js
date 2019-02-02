function Glass(){

  // Choose glass type
  glass_type = floor(random(10));
  this.img = img[glass_type];
  this.crk = crk[glass_type];

  this.shake = 0;
  this.tremble = 0;
  break_pitch = random(100, width - 100); // randm break_pitch between 100 and 700
  this.sc = 0.5 - ((break_pitch-100) * 0.3 / 600); // random scale factor based on break_pitch

  this.x = 550;
  this.y = 350 - (300 * this.sc); // Ensure bottom of glass is static

  this.playsound = 0;
  newlevel = 0;
  glass_health = 10000;

  if (breath < 8000) {
    breath += 2000;
  }


  // Show function
  this.show = function(){

    // Choose what face to Display
    imageMode(CENTER);
    if (mouseIsPressed && glass_health > 0 && breath > 0) {
      image(face[5], 270 + random(-this.tremble, this.tremble), 225 + random(-this.tremble, this.tremble), 450, 450); }
    else {
      image(face[0], 270, 225, 450, 450);
    }

    // Decide what image to show based on glass_health
    if (glass_health > 0) {
      // Display glass image
      image(this.img, this.x + random(-this.shake, this.shake), this.y + random(-this.shake, this.shake), this.img.width * this.sc, this.img.height * this.sc);
    } else if (glass_health == 0) {
      // Display broken glass
      image(this.crk, this.x, this.y, this.img.width * this.sc, this.img.height * this.sc);
      newlevel++;
      //Play broken sound once, update score
      if (this.playsound == 0) {
        crack.play();
        score = score + 1;
        this.playsound = 1;
    }
  }


    // Play scream sound, adjust shake when mouse is pressed and glass_health is above 0. Reduce breath. Reduce glass_health.
    if (mouseIsPressed && glass_health > 0 && breath > 0) {
      breath -= 25;
      if (abs(mouseX - break_pitch) < 50 && abs(mouseX - break_pitch) > 25 ) {
        this.shake = 2;
        this.vol = 1;
        this.jinglerate = 1;
        glass_health -= 20;
      } else if (abs(mouseX - break_pitch) < 25 && abs(mouseX - break_pitch) > 10 ) {
        this.shake = 5;
        this.vol = 1;
        this.jinglerate = 1.5;
        glass_health -= 50;
      } else if (abs(mouseX - break_pitch) < 10 && abs(mouseX - break_pitch) > 5 ) {
        this.shake = 10;
        this.vol = 1;
        this.jinglerate = 1.5;
        glass_health -= 100;
      } else if (abs(mouseX - break_pitch) < 5) {
        this.shake = 20;
        this.vol = 1;
        glass_health -= 300;
        this.jinglerate = 2;
      } else if (abs(mouseX - break_pitch) > 50) {
        this.shake = 0;
        this.vol = 0;
      }
      if (glass_health < 0) {
          glass_health = 0;
        }


      if (!scream1.isPlaying()) {
        scream1.loop();
        scream2.loop();
        scream3.loop();
        scream4.loop();
        scream5.loop();
        scream6.loop();
        scream7.loop();
        jingle.loop();
        }

    } else {
        scream1.stop();
        scream2.stop();
        scream3.stop();
        scream4.stop();
        scream5.stop();
        scream6.stop();
        scream7.stop();
        jingle.stop();
        this.shake = 0;
      }

    if (pitch < 280) {
    //if (pitch < 180) {
      scream1.setVolume(1);
      scream2.setVolume(0);
      scream3.setVolume(0);
      scream4.setVolume(0);
      scream5.setVolume(0);
      scream6.setVolume(0);
      scream7.setVolume(0);
      //playback_rate = (pitch-80)/(100) + 0.5;
    // } else if (180 < pitch && pitch < 280) {
    //   scream1.setVolume(0);
    //   scream2.setVolume(1);
    //   scream3.setVolume(0);
    //   scream4.setVolume(0);
    //   scream5.setVolume(0);
    //   scream6.setVolume(0);
    //   scream7.setVolume(0);
  } else if (380 < pitch && pitch < 480) {
      scream1.setVolume(0);
      scream2.setVolume(1);
      scream3.setVolume(0);
      scream4.setVolume(0);
      scream5.setVolume(0);
      scream6.setVolume(0);
      scream7.setVolume(0);

    } else if (480 < pitch && pitch < 580) {
      scream1.setVolume(0);
      scream2.setVolume(0);
      scream3.setVolume(1);
      scream4.setVolume(0);
      scream5.setVolume(0);
      scream6.setVolume(0);
      scream7.setVolume(0);
    }
    // } else if (580 < pitch && pitch < 680) {
    //   scream1.setVolume(0);
    //   scream2.setVolume(0);
    //   scream3.setVolume(0);
    //   scream4.setVolume(0);
    //   scream5.setVolume(1);
    //   scream6.setVolume(0);
    //   scream7.setVolume(0);

    // } else if (680 < pitch) {
    //   scream1.setVolume(0);
    //   scream2.setVolume(0);
    //   scream3.setVolume(0);
    //   scream4.setVolume(0);
    //   scream5.setVolume(1);
    //   scream6.setVolume(0);
    //   scream7.setVolume(0);
    //   }


    // scream1.rate(pitch/300 + 0.25);
    // scream2.rate(pitch/300 + 0.25);
    // scream1.setVolume(this.vol2);
    // scream2.setVolume(this.vol2);
    jingle.setVolume(this.vol);
    scream1.rate((pitch-80)/(200) + 0.5);
    scream2.rate((pitch-180)/(100) + 0.5);
    scream3.rate((pitch-280)/(100) + 0.5);
    scream4.rate((pitch-380)/(100) + 0.5);
    scream5.rate((pitch-480)/(100) + 0.5);
    scream6.rate((pitch-580)/(100) + 0.5);
    scream7.rate((pitch-680)/(100) + 0.5);

    // tremble
    if (breath < 2500) {
      this.tremble = 5;
    } else if (breath < 1000){
      this.tremble = 10;
    }

    // Game over screen
    if (breath <= 0) {
      breath = 0;
      image(game_over, width/2, height/2);
      if (this.playsound == 0) {
        //gameoversound.play();
        punch.play();
        random(go).play();
        this.playsound = 1;
        }
    }

    }

}
