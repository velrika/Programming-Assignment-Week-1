//text change for water availability
let image = document.getElementById('drinkIcon');

image.onmouseover = function(){
    document.getElementById('waterRemain').innerHTML = 'Dangerously Low!';
};

image.onmouseout = function(){
    document.getElementById('waterRemain').innerHTML = 'Remaining Water';
};

image.onclick = function(){
    alert("10 % left!")
};


//text change for food availability
let imageTwo = document.getElementById('appleIcon');

imageTwo.onmouseover = function(){
    document.getElementById('foodRemain').innerHTML = 'Enough for a round trip!';
};

imageTwo.onmouseout = function(){
    document.getElementById('foodRemain').innerHTML = 'Remaining Food';
};

imageTwo.onclick = function(){
    alert("5 kilograms of rice, 20 packages of greens... left!")
};

//converter
document.getElementById('converter').onclick = function(){
	let num1 = document.getElementById('kilo').value;

	let result = num1 / 1.852;

    let resultRounded = result.toFixed(2)

	//alert(result);
	document.getElementById('resultNum').innerHTML = resultRounded;
};