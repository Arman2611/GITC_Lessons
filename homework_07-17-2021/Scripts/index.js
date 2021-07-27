
var plusBtns = document.getElementsByClassName('plus');
var minusBtns = document.getElementsByClassName('minus');
var listItems = document.getElementsByClassName('FAQ-li');
var answers = document.getElementsByClassName('FAQ-answer');

function showAnswer (i) {
	plusBtns[i].classList.add('hidden');
	minusBtns[i].classList.remove('hidden');
	listItems[i].classList.add('active');
	answers[i].classList.remove('hidden');
}
function hideAnswer (i) {
	minusBtns[i].classList.add('hidden');
	plusBtns[i].classList.remove('hidden');
	listItems[i].classList.remove('active');
	answers[i].classList.add('hidden');
}

// Adding event listeners
for (let i = 0; i < listItems.length; i++) {
	plusBtns[i].onclick = showAnswer.bind(this, i);
	minusBtns[i].onclick = hideAnswer.bind(this, i);
}