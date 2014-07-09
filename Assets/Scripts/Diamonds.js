#pragma strict
	
var diamonds:Transform[];

function Start () {

	var range_x=new float[2];
	var range_y=new float[2];
	var coordinates_x=new float[2];
	var coordinates_y=new float[2];
	
	var ren=GameObject.Find("pipe3");
	range_x[0]=ren.renderer.bounds.max.x;
	range_x[1]=ren.renderer.bounds.min.x;
	range_y[0]=ren.renderer.bounds.max.y;
	range_y[1]=ren.renderer.bounds.min.y;
	
	ren=GameObject.Find("pipe2");
	coordinates_x[0]=(0.6f*range_x[0])+(0.4f*ren.renderer.bounds.max.x);
	coordinates_x[1]=(0.6f*range_x[1])+(0.4f*ren.renderer.bounds.min.x);
	coordinates_y[0]=(0.6f*range_y[0])+(0.4f*ren.renderer.bounds.max.y);
	coordinates_y[1]=(0.6f*range_y[1])+(0.4f*ren.renderer.bounds.min.y);

	/*for(var i=0;i<5;i++)
	{
		Instantiate(diamonds[i%4],new Vector2(i,i),Quaternion.identity);
	}*/
	
	var ele=Random.Range(0,21);
	var lower=0;
	var upper=2;
	var type:int;
	var i:int;
	var x:float;
	var y:float;
	
	for(i=0;i<ele;i++)
	{
		type=Random.Range(0,4);
		x=coordinates_x[Random.Range(lower,upper)];
		y=Random.Range(range_y[lower],range_y[lower+1]);	
		Instantiate(diamonds[type], new Vector2(x,y),Quaternion.identity);	
	}
	
	for(i=0;i<(20-ele);i++)
	{
		type=Random.Range(0,4);
		y=coordinates_y[Random.Range(lower,upper)];
		x=Random.Range(range_x[lower],range_x[lower+1]);	
		Instantiate(diamonds[type], new Vector2(x,y),Quaternion.identity);	
	}
}

function Update () {

}