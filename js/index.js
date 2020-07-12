const buttons = document.querySelectorAll('.share-btn');
const share = document.querySelector('.share');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		if (share.classList.contains('active')) {
			share.classList.remove('active');
		} else {
			share.classList.add('active');
		}
	});
});
