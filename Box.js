class Block {
    constructor(x,y, color) {
      var options = {
          isStatic: false,
          friction:0
      }
      this.body = Bodies.rectangle(x,y,30, 40,options);
      this.width = 30;
      this.height = 40;
      this.color = color;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      strokeWeight(4);
      stroke("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };