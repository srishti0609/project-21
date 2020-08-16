class Raindrop{
    constructor(x,y,r){
        var options={
            isStatic: false,
            'restitution':0.8,
            'friction':1.0,
             'density':1.0
                    }
                    this.body=Bodies.circle(x,y,r,options);
                    this.r=r;
                    World.add(world,this.body);
                    this.body.velocityY=-5;
                }
                display(){
                    var pos=this.body.position;
                        push();
                      // ellipseMode(RADIUS);
                       fill("blue");
                       ellipse(pos.x,pos.y,this.r*2);
                       pop();
                       
                }
                update() {
                    if(this.body.position.y>690){
                        Matter.Body.setPosition(this.body,{x:random(0,800),y:0});
                    }
                
                }
            }