"use script";
function displayTime() {
	let dateTime = new Date();
	let hrs = dateTime.getHours();
	let min = dateTime.getMinutes();
	let sec = dateTime.getSeconds();
	let session = document.getElementById("session");

	if (hrs >=12) {
		session.innerHTML = "PM";
	} else {
		session.innerHTML = "AM";
	}
	if (hrs > 12) {
		hrs = hrs - 12;
	}

	hrs = (hrs < 10) ? "0" + hrs : hrs;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;

	document.getElementById("hours").innerHTML = hrs;
	document.getElementById("minutes").innerHTML = min;
	document.getElementById("seconds").innerHTML = sec

}

setInterval(displayTime, 10);