using UnityEngine;
using System.Collections;

public class Trial : MonoBehaviour {
	public string name;

	//public float speed;
	private Rigidbody2D rgb;

	// Use this for initialization
	void Start () {
		Debug.Log ("I am alive and my name is " + name);
		//x = 0.5f; y =0.5f;
		//speed = 0.01f;
		//rgb = GetComponent<Rigidbody2D> ();
	}
	
	// Update is called once per frame
	void Update () {
		//transform.position = new Vector2 (x, y);
	}

	void FixedUpdate()
	{
		//float h = Input.GetAxis ("Horizontal");
	//	float v = Input.GetAxis ("Vertical");
		//if (h * rigidbody2D.velocity.x>0)
		//				rgb.velocity = new Vector2 (5, 0);
	}

}
/*force added to rigid body
 rgb = GetComponent<Rigidbody2D> ();
Vector2 force = transform.forward * speed * Input.GetAxis ("Vertical");
rgb.AddForce (force);*/
//position set with transform.position
