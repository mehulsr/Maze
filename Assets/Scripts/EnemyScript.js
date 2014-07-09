#pragma strict

//var speed=0.2f;
//var e1=GameObject.FindGameObjectWithTag();
//var e2=GameObject();
//var speed=-0.002f;


var enemy:Transform[];

var range_y=new float[2];
var coordinates_x=new float[2];
var coordinates_y=new float[2];
	
	var x_start=new int[2];
	var y_start=new int[2];
	var x_final=new int[2];
	var y_final=new int[2];

	var x:int;
	var y:int;	
	var ren1:GameObject;
	var ren2:GameObject;


function Start () {


	
	ren1=GameObject.Find("pipe3");
	ren2=GameObject.Find("pipe4");
	
		
	coordinates_x[0]=0.35*ren1.renderer.bounds.max.x+0.65*ren2.renderer.bounds.max.x;
	coordinates_x[1]=0.35*ren1.renderer.bounds.min.x+0.65*ren2.renderer.bounds.min.x;
	coordinates_y[0]=0.35*ren1.renderer.bounds.max.y+0.65*ren2.renderer.bounds.max.y;
	coordinates_y[1]=0.35*ren1.renderer.bounds.min.y+0.65*ren2.renderer.bounds.min.y;


	for(var i=0;i<2;i++)
	{
		x_start[i]=Random.Range(0,2);
		y_start[i]=Random.Range(0,2);
		Instantiate(enemy[i],new Vector2(coordinates_x[x_start[i]],coordinates_y[y_start[i]]),Quaternion.identity);
	}
	
	//FindEnd();

}

function Update () {

	/*var speed=0;
	var i=Random.Range(0,2);
	//print(i+""+x_start[i]+""+x_final[i]);
	if((y_start[i]<y_final[i])||(x_start[i]<x_final[i]))
		speed=-0.2f;
	else
		speed=0.2f;	
	if(x_start[i]==x_final[i])
	{
		while((coordinates_y[y_final[i]]-enemy[i].position.y)!=0)
			enemy[i].transform.Translate(Vector2.up*speed);
	}
	else
	{
		while((coordinates_x[x_final[i]]-enemy[i].position.x)!=0)
			enemy[i].transform.Translate(Vector2.right*speed);
	}*/
}

/*
function FindEnd()
{
	//transform.position+=Vector2.up*speed;
	for(var k=0;k<2;k++)
	{
		x_final[k]=Random.Range(0,2);
		y_final[k]=Random.Range(0,2);
		if((x_final[k]^x_start[k])^(y_final[k]^y_start[k]))
			continue;
		else
			k--;
		
	}
}

function OnCollisionEnter2D(coll:Collision2D)
{
//	if(coll.gameObject.tag=="Player")
//		speed=0f;	
Debug.Log("collision");
}*/
