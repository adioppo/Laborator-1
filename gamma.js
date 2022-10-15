window.addEventListener("deviceorientation", on_device_orientation1);
function on_device_orientation1(evt)
{
var alpha = evt.alpha;
var beta = evt.beta;
var gamma = evt.gamma;
document.getElementById("a").innerHTML = "alpha = "+alpha;
document.getElementById("b").innerHTML = "beta = "+beta;
document.getElementById("c").innerHTML = "my_gamma = "+gamma;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var centru = {x:canvas.width/2, y:canvas.height/2}
var latura_patrat = 50;
context.clearRect(0, 0, canvas.width, canvas.height);
context.fillStyle = "red";
context.beginPath();
context.fillRect(180, 150, 50, evt.gamma);