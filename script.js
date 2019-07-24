var numOfSquares = 6;
var colors = buildArray(numOfSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisp");
var msg = document.querySelector("#msg");
var selectedColor = generateColor();
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
colorDisp.textContent = selectedColor;


easyBtn.addEventListener("click", function(){
	numOfSquares = 3;
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = buildArray(numOfSquares);
	selectedColor = generateColor();
	colorDisp.textContent = selectedColor;
	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	numOfSquares = 6;
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = buildArray(numOfSquares);
	selectedColor = generateColor();
	colorDisp.textContent = selectedColor;
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

reset.addEventListener("click", function(){
	this.textContent = "New Colors";
	colors = buildArray(numOfSquares);
	selectedColor = generateColor();
	colorDisp.textContent = selectedColor;
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	msg.textContent = "";
});

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === selectedColor){
			msg.textContent = "Correct!"
			setColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again!";
		}
		else{
			this.style.background = "#232323";
			msg.textContent = "Wrong!"
		}
	});
}

function setColor(color) {
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function generateColor() {
	var r = Math.floor(Math.random() * colors.length);
	return colors[r];
}

function buildArray(num) {
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(rC());
	}
	return arr;
}

function rC() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var ans = "rgb(" + r + ", " + g + ", " + b + ")";
	return ans;
}