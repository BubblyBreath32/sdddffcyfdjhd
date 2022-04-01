
// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");

//Set initial positions for ball and hole images.
var ball_x = 0;
var ball_y = 0;

var h_x = 800;
var h_y = 400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
        golf_object = Img;

        golf_object.scaleToWidth(47);
        golf_object.scaleToHeight(47);
        golf_object.set({
            top:h_y,
            left:h_x
        });

canvas.add(golf_object);

    });
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Img){
        ball_object = Img;

        ball_object.scaleToWidth(47);
        ball_object.scaleToHeight(47);
        ball_object.set({
            top:ball_y,
            left:ball_x
        });
		canvas.add(ball_object);

    });
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */

	if((ball_x == h_x) && (ball_y == h_y)) {
       canvas.remove("ball_object");
	  document.getElementById("hd3").innerHTML = "GAME OVER!!";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y >=0) {
			ball_y = ball_y - block_image_height;
			canvas.remove(ball_object);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y <=507) {
			ball_y = ball_y + block_image_height;
			canvas.remove(ball_object);
			new_image();
		 }
	}

	function left()
	{
		if(ball_x >=0) {
			ball_x = ball_x - block_image_width;
			canvas.remove(ball_object);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=977) {
			ball_x = ball_x - block_image_width;
			canvas.remove(ball_object);
			new_image();
		// Write a code to move ball right side.
		}
	}
	
}

