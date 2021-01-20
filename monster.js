class Hero {
  
    constructor(x,y,r) {
      var options = {
          density:5,
          frictionAir:0.0
          
      }
      this.body = Bodies.circle(this.x,this.y,this.r/2,options);
     this.r=r
     this.x=x
     this.y=y
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle
      push()
      translate (pos.x,pos.y);
      rotate(angle)
      rectMode(CENTER);
      fill("brown");
      ellipse(0, 0, this.width, this.height);
      pop()
    }
  };