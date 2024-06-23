function currentTime(){
	let data = new Date()
	let hour = data.getHours()
	let minute = data.getMinutes()
	let second = data.getSeconds()
	hour = plusZero(hour)
	minute = plusZero(minute)
	second = plusZero(second)
	document.getElementById('time').innerText = hour+" : "+minute+" : "+second;
	setTimeout(currentTime, 1000)
	// console.log(hour, minute, second)


}
function plusZero(number){
	if (number<10){
		return "0" + number
	}else{
		return number
	}
}
currentTime()