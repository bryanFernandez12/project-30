class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility= 255
      
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed<3){

      var pos = this.body.position;
      var angle = this.body.angle;
      push();                
      translate(pos.x,pos.y);
      rotate(angle)
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      
       // super.display();
         }
       else{
         World.remove(world, this.body)
         push()
         this.visibility=this.visibility-5
         tint(255, this.visibility)
     
         image(this.image, this.body.position.x, this.body.position.y, 50,50)
         pop()
       }
    }
   };