#pragma strict

//var myName: String;
//var x:int;
var x=0.2f;
var t=0;
var qdialog:Transform;
//var right:Transform;
//var wrong:Transform;
var startpoint:Vector2;
var score=0;
var lives=3;
var scoring:GameObject;
var living:GameObject;

function Start () {

	//var pl=GameObject();
	
	Destroy(GameObject.Find("qdialog"));
	startpoint=new Vector2(transform.position.x,transform.position.y);
	scoring=GameObject.Find("Score");
	scoring.guiText.text="Score: "+score;
	
	living=GameObject.Find("Lives");
	living.guiText.text="Lives: "+lives;
	//transform.position+=Vector2.right*1f;
}

//var dir={KeyCode.Space,KeyCode.UpArrow,KeyCode.DownArrow,KeyCode.RightArrow,KeyCode.LeftArrow};

function Update () {

	//scoretext.text="Score: 0";
	
	if(Input.GetKeyDown(KeyCode.Space))  //this is not working
	{
		if(Input.GetKeyDown(KeyCode.UpArrow))
			rigidbody2D.AddForce(new Vector2(0f,0.1));
			//transform.position+=Vector2.up*1f;
		else if(Input.GetKeyDown(KeyCode.DownArrow))
			transform.position+=Vector2.up*(-0.4f);
		else if(Input.GetKeyDown(KeyCode.RightArrow))
			transform.position+=Vector2.right*0.4f;
		else if(Input.GetKeyDown(KeyCode.LeftArrow))
			transform.position+=Vector2.right*(-0.4f);
	}
	else
	{
		if(Input.GetKeyDown(KeyCode.UpArrow))
			transform.Translate(Vector2.up*0.2f);
		else if(Input.GetKeyDown(KeyCode.DownArrow))
			transform.Translate(Vector2.up*(-0.2f));
		else if(Input.GetKeyDown(KeyCode.RightArrow))
			transform.Translate(Vector2.right*0.2f);
		else if(Input.GetKeyDown(KeyCode.LeftArrow))
			transform.Translate(Vector2.right*(-0.2f));
	}
	
	scoring.guiText.text="Score: "+score;
	living.guiText.text="Lives: "+lives;
}


function OnCollisionEnter2D(col:Collision2D){

	var correct=false;

//	if(Input.GetKeyDown(KeyCode.UpArrow||KeyCode.DownArrow||KeyCode.RightArrow||KeyCode.LeftArrow))
//		transform.position=Vector2.right*(-0.2f);
	var name=col.gameObject.tag;
	if(name=="Coin")
	{	
		Destroy(col.gameObject);
		score+=10;
	}
	else if(name=="Diamond")
	{
		Destroy(col.gameObject);
		score+=20;
	}
	else if(name=="Cup")
	{
		Destroy(col.gameObject);
		score+=100;
	}
	else if(name=="Bomb"||name=="Enemy")
	{
		//Destroy(col.gameObject);
		score-=10;
		lives--;
		this.transform.position=startpoint;
	}
	else if(name=="Sphinx")
	{	
		/*var ren=GameObject.Find("sphinx");
		var x=ren.renderer.bounds.max.x;
		var y=GameObject.Find("pipe4").renderer.bounds.max.y;
		while(!correct)
		{
			correct=FireQuestion(x,y);
		}	
		Destroy(ren);*/
		if(qdialog==null)
		{
			t=Random.Range(0,3);
			Instantiate(qdialog,new Vector2(100,100),Quaternion.identity);
		}
	}
	else if(name=="FinishLine")
	{
		//Destroy(gameObject);  //yet to think of somthing
	}
	scoring.guiText.text="Score: "+score;
	living.guiText.text="Lives: "+lives;	
}



/*function FireQuestion(x:float,y:float)
{
	var ans:String;
	var pick=Random.Range(0,3);
	qdialog.ques=questions[pick];	
	
	Instantiate(qdialog,new Vector2(x,y),Quaternion.identity);
	
	while(true)
	{
		if(qdialog.test==true)
		{
			if(qdialog.ans.Equals(answers[pick]))
			{
				Destroy(qdialog);
				return true;
			}
			else
				break;
		}
	}
	
	return false;
	
	
	if(qdialog.
	var ans=qdialog.ans;
	
	if(ans.Equals(answers[pick]))
	{	
		Destroy(qdialog);
		return true;
	}
}*/