class Log extends Baseclass{
    constructor(x,y,height,angle){
super(x,y,20,height,angle);
this.Image=loadImage("sprites/wood2.png");
        
 angleMode(RADIANS) ;     
Matter .Body.setAngle(this.body,angle)
        }
}