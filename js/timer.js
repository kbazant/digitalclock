//JS for clock

function counting() {

	let today = new Date();
	let day = today.getDate();
	if (day < 10) day = "0" + day;

	let month = today.getMonth() + 1;
	if (month < 10) month = "0" + month;

	let year = today.getFullYear();

	let hour = today.getHours();
	if (hour < 10) hour = "0" + hour;

	let minute = today.getMinutes();
	if (minute < 10) minute = "0" + minute;

	let second = today.getSeconds();
	if (second < 10) second = "0" + second;

	document.getElementById("clock").innerHTML =
		day + "/" + month + "/" + year + " &#183; " + hour + ":" + minute + ":" + second;

	setTimeout("counting()", 1000);
}