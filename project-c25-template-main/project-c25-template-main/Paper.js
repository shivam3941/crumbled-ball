class paper

{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2,
           
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png")
		thid.body=Bodies.circle(this.x,this.y,(r-20)/2,option)
 		World.add(world, this.body);

	}
	display()
	{
			
			var PaperPos=this.body.position;		

			push()
			translate(PaperPos.x, PaperPos.y);
		    imageMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			this.image(this.image,0,0,this.r,this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}