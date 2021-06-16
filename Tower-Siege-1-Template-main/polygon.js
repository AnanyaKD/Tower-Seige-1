class Polygon{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0}
              
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.image = loadImage("polygon.png");
            World.add(world, this.body);

    }
    display(){

   image(this.polygon,300,229,20,20);
   imageMode(CENTER);

    }


}