var imagecount = 1;
var total = 5;

function slide(x) {
	var Image = document.getElementsByClassName('img');
	imagecount = imagecount + 1;
	Image.src = "images/img" + imagecount +".jpg";
}