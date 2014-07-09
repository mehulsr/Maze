#pragma strict

var icon:Texture2D;
var ques="";
var ans="";
var test=false;

var questions=new Array("Who is the CEO of Microsoft?","What is the colour of the sky?","Who made this game?");
var answers=new Array("Satya Nadella","Blue","Mehul Smriti Raje");	
static var pick=Random.Range(0,3);

var right:Transform;
var wrong:Transform;

function OnGUI()
{
	var x=new Array();
	var t=GameObject.Find("cup").renderer.bounds.max.x;
	x.push(t-50);
	x.push(t-30);
	x.push(t-30);
	x.push(t-30);
	
	var y=new Array();
	var u=GameObject.Find("pipe2").renderer.bounds.max.y;
	y.push(u);
	y.push(u+15);
	y.push(u+35);
	y.push(u+65);
	
	/*GUI.Box(new Rect(x[0],y[0],100,100),icon);
	GUI.Label(new Rect(x[1],y[1],60,20),"Answer my question to get to the cup");
	GUI.Label(new Rect(x[2],y[2],60,30),ques);
	ans=GUI.TextField(new Rect(x[3],y[3],60,20),ans);*/
	

	ques=questions[pick];
	
	GUI.Box(new Rect(200,200,500,200),icon);
	GUI.Label(new Rect(220,215,400,50),"Answer my question to get to the cup");
	GUI.Label(new Rect(220,235,400,50),ques);
	ans=GUI.TextField(new Rect(220,265,400,30),ans);
	
	if(GUI.Button(new Rect(220,300,400,30),"Check Answer!"))
	{
		Destroy(gameObject);
		if(ans.Equals(answers[pick]))
		{
			Destroy(GameObject.Find("sphinx"));
			Instantiate(right,new Vector2(100,100),Quaternion.identity);
			test=true;
		}
		else
		{
			Instantiate(wrong,new Vector2(100,100),Quaternion.identity);
			var t2=Random.Range(0,3);
		}
	}
	
	//GUI.Button(new Rect(),"Check Answer!");
	
}