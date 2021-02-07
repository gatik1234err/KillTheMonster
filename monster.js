class Monster {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
          'friction':0.8,
          'density':0.01,
      }
      this.image=loadImage("Monster-01.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(7);
      stroke("green");
      fill("pink");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }