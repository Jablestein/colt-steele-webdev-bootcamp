alert("Connected!");

	var colors = randomizeColors(6);

	var squares = document.querySelectorAll(".square");
	var pickedColor = colors[pickColor()];
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector("#message");
	//var messageDisplay = document.getElementById("message");
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");

	var easyButton = document.querySelector("#easy");
	var hardButton = document.querySelector("#hard");
	var hardSelected = true;
	var modeButtons = document.querySelectorAll(".mode");
	

	colorDisplay.textContent = pickedColor;

	colorSquares();
	
	//Add the event listeners
	for(var i = 0; i < squares.length; i++)
	{
		//add Click Listeners to Squares
		squares[i].addEventListener("click", clickedSquare);
			
	}

	resetButton.addEventListener("click", function(){

		resetGame();
	})

	easyButton.addEventListener("click", function(){
		easyButton.classList.add("selected");
		hardButton.classList.remove("selected");
		hardSelected = false;
		resetGame();
	})

	hardButton.addEventListener("click", function(){
		easyButton.classList.remove("selected");
		hardButton.classList.add("selected");
		hardSelected = true;
		resetGame();
	})

	function clickedSquare(){
		if(this.style.backgroundColor === pickedColor)
		{
			//alert("They Clicked the Right Square");
			messageDisplay.textContent = "Correct";
			if(hardSelected)
			{
				for(var i = 0; i < squares.length; i++)
				{
					//using backgroundColor because it works in all browsers
					//opposed to simply background which doesn't work in firefox

						if(squares[i].style.backgroundColor != pickedColor)
						squares[i].style.backgroundColor = pickedColor;			

				}
			}
			else
			{
				for(var i = 0; i < squares.length/2; i++)
				{
					//using backgroundColor because it works in all browsers
					//opposed to simply background which doesn't work in firefox

						if(squares[i].style.backgroundColor != pickedColor)
						squares[i].style.backgroundColor = pickedColor;

				}

			}
			
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "PlayAgain?";
		}
		else
		{

			//alert("They Clicked Wrong Bitch!");
			//Adding a class here does not work, the element.style wins out.
			//this.classList.add("wrongClick");
			this.style.backgroundColor = "#232323";

			messageDisplay.textContent = "Try Again!";
		}
	}

	function colorSquares(){

		for(var i = 0; i < squares.length; i++)
		{
			//using backgroundColor because it works in all browsers
			//opposed to simply background which doesn't work in firefox
			
			//Check to see if there's a color for this.
			if(colors[i])
			{
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}
			else
				squares[i].style.display = "none";
		}
		
	}

	function pickColor(){
		var pickedColor = Math.floor(Math.random() * colors.length);
		return pickedColor;
	}

	function randomizeColors(num){
		// Math.random() * 255;
		var colorArray = [];

		for(var i = 0; i < num; i++)
		{
			colorArray[i] = randomColor();
			//could also use colorArray.push()
		}

		return colorArray;

	}

	function randomColor(){
		//pick a "red" from 0 - 255
		var r = Math.floor(Math.random() * 256);
		//pick a "green" from 0 - 255
		var g = Math.floor(Math.random() * 256);
		//pick a "blue" from 0 - 255
		var b = Math.floor(Math.random() * 256);
		var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
		return rgb;
	}

	function resetGame(){
		//alert("Reset Clicked!");
		if(hardSelected)
		{
			colors = randomizeColors(6);
		}
		else
		{
			colors = randomizeColors(3);
		}
		pickedColor = colors[pickColor()];
		colorSquares();
		colorDisplay.textContent = pickedColor;
		messageDisplay.textContent = "";
		h1.style.backgroundColor = "steelblue";
		resetButton.textContent = "New Colors"
	}

	
