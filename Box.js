class Box{
    constructor(x,y,width,height){
        var gp={
            isStatic: true
        }
        this.width=width;
        this.height=height;
        this.body =Bodies.rectangle(x,y,width,height,gp);
//World.add(myworld,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill("red"); 
  rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
    }
}