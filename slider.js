var imagecount = 1;
var total = 5;

function slide(x) {
	var Image = document.getElementsById('img');
	imagecount = imagecount + x;
	if (imagecount > total) {
		imagecount = 1;
	}
	if (imagecount < 1) {
		imagecount = total;
	}
	Image.src = "images/img" + imagecount + ".jpg";
}

function.setInterval(function slideA(x) {
	var Image = document.getElementsById('img');
	imagecount = imagecount + x;
	if (imagecount > total) {
		imagecount = 1;
	}
	if (imagecount < 1) {
		imagecount = total;
	}
	Image.src = "images/img" + imagecount + ".jpg";
}, 5000);