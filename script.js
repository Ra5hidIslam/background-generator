var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");
function ran()
{
	return Math.floor((Math.random()*255)+1);
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function setGradient1() {
	body.style.background = 
	"linear-gradient(to right, " 
	+  'rgb(' + ran() + ',' + ran() + ',' + ran() + ')'
	+ ", " 
	+  'rgb(' + ran() + ',' + ran() + ',' + ran() + ')'
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.value = "#FF0000";
color2.value = "#FFFF00";

css.textContent = color1.value + ";" + color2.value;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setGradient1);