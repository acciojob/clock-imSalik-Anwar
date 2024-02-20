let time = document.getElementById("timer")
setInterval(clock, 1000)

function clock(){
	let date = new Date()
	let month = date.getMonth()
	let day = date.getDate()
	let year = date.getFullYear()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()

	if(minutes < 10) minutes = "0"+minutes
	if(seconds < 10) seconds = "0"+seconds
	let m = ""
	if(hours < 12) m = "AM"
	else {
	  m = "PM"
	  hours = hours - 12
	}
	
	timer.innerHTML = `${month}/${day}/${year}, ${hours}:${minutes}:${seconds} ${m}`
}
