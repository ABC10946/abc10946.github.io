window.onload = function(){
	var age_inline = document.getElementById("hex_age");

	function calcAge(birthday){
		var birth = birthday.split('-');
		var birthday_ = parseInt("" + birth[0] + birth[1] + birth[2]);
		var today = new Date();
		var today_ = parseInt("" + today.getFullYear() + addZero(today.getMonth() + 1) + addZero(today.getDate()));
		return parseInt((today_ - birthday_)/10000);
	}
	function addZero(int){
		if (int < 10) int = "0" + int;
		return "" + int;
	}

	age_inline.innerHTML = "0x"+calcAge("1998-11-14").toString(16)
}
