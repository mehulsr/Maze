#pragma strict

//var pipe_lengths_x:float[];
//var pipe_lengths_y:float[];
var coordinates_x:float[];
var coordinates_y:float[];
var range_x:float[];
var range_y:float[];
//var coins[]:GameObject;
//var num={15,6};

var coin:Transform;

function Start () {
	var ren:GameObject;
	var width:float;
	var length:float;
	
	var x:float;
	var y:float;
	var y1:float;
	var y2:float;
	
	var ele:float;
	var lower:int;
	var upper:int;
	
	//initialising the arrays
	//pipe_lengths_x=new float[2];
	//pipe_lengths_y=new float[2];
	coordinates_x=new float[4];
	coordinates_y=new float[4];
	range_x=new float[4];
	range_y=new float[4];
	
	
	/*determining the x and y coordinates of the pipes, their lengths and their range of values*/
	ren=GameObject.Find("pipe5");
	range_x[0]=ren.renderer.bounds.max.x;
	range_x[1]=ren.renderer.bounds.min.x;
	range_y[0]=ren.renderer.bounds.max.y;
	range_y[1]=ren.renderer.bounds.min.y;
	//pipe_lengths_x[0]=range_x[0]-range_x[1];
	//pipe_lengths_y[0]=range_y[0]-range_y[1];
	
	ren=GameObject.Find("pipe4");
	coordinates_x[0]=(range_x[0]+ren.renderer.bounds.max.x)/2;
	coordinates_x[1]=(range_x[1]+ren.renderer.bounds.min.x)/2;
	coordinates_y[0]=(range_y[0]+ren.renderer.bounds.max.y)/2;
	coordinates_y[1]=(range_y[1]+ren.renderer.bounds.min.y)/2;	
	

	ren=GameObject.Find("pipe2");
	range_x[2]=ren.renderer.bounds.max.x;
	range_x[3]=ren.renderer.bounds.min.x;
	range_y[2]=ren.renderer.bounds.max.y;
	range_y[3]=ren.renderer.bounds.min.y;
	//pipe_lengths_x[1]=range_x[2]-range_x[3];
	//pipe_lengths_y[1]=(0.5f*range_y[2])-(1.5f*range_y[3]);
	
	ren=GameObject.Find("pipe1");
	coordinates_x[2]=(range_x[2]+ren.renderer.bounds.max.x)/2;
	coordinates_x[3]=(range_x[3]+ren.renderer.bounds.min.x)/2;
	y1=ren.renderer.bounds.max.y;
	y2=ren.renderer.bounds.min.y;
	coordinates_y[2]=(0.85f*range_y[2])+(0.15f*y1);
	coordinates_y[3]=(0.85f*range_y[3])+(0.15f*y2);
	//range_y[2]=(0.25f*range_y[2])+(0.75f*y1);
	//range_y[3]=(0.50f*range_y[3])+(0.50f*y2);
	//pipe_lengths_y[1]+=0.5f*(y1+y2);
	//pipe_lengths_y[1]=range_y[2]-range_y[3];
	
	
	
	//generating random positions for the coins
	ele=Random.Range(0,7);
	var i:int;
	var j:int;
	var max=6;
	
	for(j=0;j<2;j++)
	{
		lower=j*2;
		upper=(j*2)+2;
		for(i=0;i<ele;i++)
		{
			x=coordinates_x[Random.Range(lower,upper)];
			y=Random.Range(range_y[lower],range_y[lower+1]);	
			Instantiate(coin, new Vector2(x,y),Quaternion.identity);	
		}
	
		for(i=0;i<(max-ele);i++)
		{
			y=coordinates_y[Random.Range(lower,upper)];
			x=Random.Range(range_x[lower],range_x[lower+1]);	
			Instantiate(coin, new Vector2(x,y),Quaternion.identity);	
		}
		
		ele=Random.Range(0,11);
		max=10;
	}
	
	/*for(var i=0;i<4;i++)
	{
		Instantiate(coin, new Vector2(range_x[i],range_y[i]),Quaternion.identity);	
	}*/
}

function Update () {

}