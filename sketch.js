const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var polygon, polygonImg
function preload(){
  //  polygonImg = loadImage("polygon.png")
    
    }
    function setup(){
        var canvas = createCanvas(1200,400);
        engine = Engine.create();
        world = engine.world;
        //polygon = createSprite(100, 200, 10,10)
        //polygon.addImage(polygonImg)
        //polygon.scale = 0.1
        ground = new Ground(600,390,1200,20)
        platform01 = new Ground(420, 300, 250, 10)
        platform02 = new Ground(730, 250, 250, 10)
        block01 = new Block(365,275,30,40)
        block02 = new Block(380,275,30,40)
        block03 = new Block(400,275,30,40)
        block04 = new Block(420,275,30,40)
        block05 = new Block(440,275,30,40)
        block06 = new Block(460,275,30,40)
        block07 = new Block(480,275,30,40)
        
        block08 = new Block(670,235,30,40)
        block09 = new Block(690,235,30,40)
        block10 = new Block(710,235,30,40)
        block11 = new Block(730,235,30,40)
        block12 = new Block(750,235,30,40)
        block13 = new Block(770,235,30,40)
        block14 = new Block(790,235,30,40)
       
        block15 = new Block(710,195,30,40)
        block16 = new Block(710,195,30,40)
        block17 = new Block(713,195,30,40)
        block18 = new Block(735,195,30,40)
        block19 = new Block(743,195,30,40)

        block20 = new Block(380,290,30,40)
        block21 = new Block(400,290,30,40)
        block22 = new Block(420,290,30,40)
        block23 = new Block(440,290,30,40)
        block24 = new Block(460,290,30,40)

        block25 = new Block(400,250,30,40)
        block26 = new Block(420,250,30,40)
        block27 = new Block(440,250,30,40)

        block28 = new Block(713,165,30,40)
        block29 = new Block(716,165,30,40)
        block30 = new Block(738,165,30,40)
        block31 = new Block(725,145,30,40)

        block32 = new Block(420,230,30,40)

        polygon= new Polygon(100,200,30)
       slingshot = new SlingShot(polygon.body,{x:100, y:150})
        Engine.run(engine);
    }
    function draw(){
        background(0);  
        drawSprites() 
        Engine.update(engine);
      //  block.display()
        ground.display()
        platform01.display()
        platform02.display()
        block01.display()
        block02.display()  
        block03.display()
        block04.display()
        block05.display()
        block06.display()
        block07.display()
        block08.display()
        block09.display()
        block10.display()
        block11.display()
        block12.display()
        block13.display()
        block14.display()
        block15.display()
        block16.display()
        block17.display()
        block18.display()
        block19.display()
        block20.display()
        block21.display()
        block22.display()
        block23.display()
        block24.display()
        block25.display()
        block26.display()
        block27.display()
        block28.display()
        block29.display()
        block30.display()
        block31.display()
        block32.display()

        slingshot.display()
        polygon.display();
    }

    function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
    
    
    function mouseReleased(){
        slingshot.fly();
    }

    function keyPressed(){

      if(keyCode === 32){
  
          slingshot.attach(polygon.body)
      }
  
  }