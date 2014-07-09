#pragma strict

var icon:Texture2D;
var question:Transform;

function OnGUI()
{
	GUI.Box(new Rect(200,200,500,200),icon);
	GUI.Label(new Rect(220,215,400,50),"Wrong Answer! Try again");
	
	if(GUI.Button(new Rect(220,300,400,30),"OK!"))
	{
		Destroy(gameObject);
		Instantiate(question,new Vector2(100,100),Quaternion.identity);
	}
}