var css = document.querySelector("h3");
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var rdmbtn = document.querySelector('button');


function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", "
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

// function to generate two random numbers..

function randomNum() {
	return Math.floor(Math.random() * 255);
}

// random button to convert random gradients..
function rdmBtn() {
	var clr1 = "rgb("
				+ (Math.floor(Math.random() * 255)) 
				+ ","
				+ (Math.floor(Math.random() * 255))
				+ ","
				+ (Math.floor(Math.random() * 255))
				+ ')';

	var clr2 = "rgb("
				+ (Math.floor(Math.random() * 255)) 
				+ ","
				+ (Math.floor(Math.random() * 255))
				+ ","
				+ (Math.floor(Math.random() * 255))
				+ ')';

	body.style.background = "linear-gradient(to right," 
							+ clr1 
							+ ","
							+ clr2
							+ ")";

	css.textContent = body.style.background + ";";


}

color1.addEventListener("input",
	setGradient
);

color2.addEventListener("input",
	setGradient);

rdmbtn.addEventListener("click", rdmBtn);




