class BlockRed {
    constructor(x,y,width,height) {
      var options = {
        'restitution':1,
        'friction':0.0,
        'density':0.5
        
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
      var pos =this.body.position;
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };