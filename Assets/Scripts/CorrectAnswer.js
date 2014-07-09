#pragma strict

var icon:Texture2D;

function OnGUI()
{
	Destroy(GameObject.Find("qdialog"));
	GUI.Box(new Rect(200,200,500,200),icon);
	GUI.Label(new Rect(220,215,400,50),"Correct Answer! You can pass through!");
	
	if(GUI.Button(new Rect(220,300,400,30),"OK!"))
	{
		Destroy(gameObject);
	}
}