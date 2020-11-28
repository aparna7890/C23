class Box{
    constructor(x,y,w,h){
        var options = {
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        //console.log(this.body);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle
        push ()
        translate (this.body.position.x , this.body.position.y)
        rotate (angle)
        rectMode(CENTER);
        fill ("pink")
        rect(0, 0, this.width, this.height);
        pop()
    }
}