#pragma strict

//var speed=0.2f;
//var e1=GameObject.FindGameObjectWithTag();
//var e2=GameObject();
//var speed=-0.002f;


var enemy:Rigidbody2D[];

var range_y=new float[2];
var coordinates_x:float[];
var coordinates_y:float[];

var x_start:int[];
var y_start:int[];
var x_final:int[];
var y_final:int[];

var x:float;
var y:float;	
var ren1:GameObject;
var ren2:GameObject;

var positions:Vector2[];
var start:int[];
var finish:int[];
var move:Vector2[];


	var enemies:GameObject[];

function Start () {

	coordinates_x=new float[2];
	coordinates_y=new float[2];
	x_start=new int[2];
	y_start=new int[2];
	
	ren1=GameObject.Find("pipe3");
	ren2=GameObject.Find("pipe4");
	
		
	coordinates_x[0]=0.35*ren1.renderer.bounds.max.x+0.65*ren2.renderer.bounds.max.x;
	coordinates_x[1]=0.35*ren1.renderer.bounds.min.x+0.65*ren2.renderer.bounds.min.x;
	coordinates_y[0]=0.35*ren1.renderer.bounds.max.y+0.65*ren2.renderer.bounds.max.y;
	coordinates_y[1]=0.35*ren1.renderer.bounds.min.y+0.65*ren2.renderer.bounds.min.y;
	
	positions=new Vector2[4];
	start=new int[2];
	finish=new int[2];
	move=new Vector2[2];
	var i=0;
	
	for(var j=0;j<2;j++)
	{	for(var k=0;k<2;k++)
		{	
			positions[i++]=new Vector2(coordinates_x[j],coordinates_y[k]);
		}
	}
			
	var constant=1;
	enemies=new GameObject[2];
	
	for(i=0;i<2;i++)
	{
		start[i]=Random.Range(0,4);
		move[i]=positions[start[i]];
		Instantiate(enemy[i],positions[start[i]],Quaternion.identity);
		finish[i]=(start[i]+constant+4)%4;
		constant=-constant;
	}
}

function Update () {

	var speed=0.4f;
	var constant=1;
	var k=0;
	var i=0;
	
	//Debug.Log(""+enemy[i].position);
	
	//for(var i=0;i<2;i++)
	//{
	//for loop starts here
	//if((Mathf.Abs(move[i].x-positions[finish[i]].x)>=0.4f)||(Mathf.Abs(move[i].y-positions[finish[i]].y)>=0.4f))
	if(move[i]==positions[finish[i]])
	{
		start[i]=finish[i];
		finish[i]=(start[i]+1)%4;
		move[i]=positions[start[i]];
	}
	else 
	{
		if(start[i]==k++) //k=0;
		{
			enemy[i].transform.position+=Vector2.right*(-0.4f);
			//enemy[i].position.x+=-0.4f;
			Debug.Log("hey");
			move[i]=enemy[i].transform.position;
		}
		else if(start[i]==k++) //k=1;
		{
			enemy[i].transform.Translate(Vector2.up*(-0.4f));
			move[i]=enemy[i].transform.position;
		}
		else if(start[i]==k++)  //k=2
		{
			enemy[i].transform.Translate(Vector2.right*0.4f);
			move[i]=enemy[i].transform.position;
		}
		else  ///k=3
		{
			enemy[i].transform.Translate(Vector2.up*0.4f);
			move[i]=enemy[i].transform.position;
		}
	}
	
/*	constant=-constant;
	//speed=-speed;  //speed=-0.4f
	k=-k;  //k=-3
	//for loop ends here
  	}*/
  	
  	i=1;
  	k=0;
  	//if((Mathf.Abs(move[i].x-positions[finish[i]].x)>=0.4f)||(Mathf.Abs(move[i].y-positions[finish[i]].y)>=0.4f))
  	if(move[i]==positions[finish[i]])
	{
		start[i]=finish[i];
		finish[i]=(start[i]-1+4)%4;
		move[i]=positions[start[i]];
	}
	else 
	{
		if(start[i]==k++) //k=0;
		{
			enemy[i].transform.Translate(Vector2.up*(-speed));
			move[i]=enemy[i].transform.position;
		}
		else if(start[i]==k++) //k=1;
		{
			enemy[i].transform.Translate(Vector2.right*speed);
			move[i]=enemy[i].transform.position;
		}
		else if(start[i]==k++)  //k=2
		{
			enemy[i].transform.Translate(Vector2.up*speed);
			move[i]=enemy[i].transform.position;
		}
		else  ///k=3
		{
			enemy[i].transform.Translate(Vector2.right*(-speed));
			move[i]=enemy[i].transform.position;
		}
	}
}
