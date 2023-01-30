let card = document.querySelector('.flip-card');
let cardState = 'front';
card.addEventListener('click', handleClick);
let flipper = document.querySelector('#flipper');

function handleClick() {
	if (cardState == 'front') {
		flipper.classList.add('flip');
		cardState = 'back';
	} else {
		flipper.classList.remove('flip');
		cardState = 'front';
	}
}
