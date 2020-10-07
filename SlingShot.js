class SlingShot{
    constructor(a,b ){
        var options = {
            bodyA: a,
            pointB: b,
            stiffness: 0.0004,
            length: 5
        }
        this.sling = Constraint.create(options);
        this.pointB=b;
        World.add(world, this.sling);
    }
fly(){
    this.sling.bodyA=null;
}
    display(){
        if (this.sling.bodyA !== null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}