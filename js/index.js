const button = document.querySelector('.share-button');
const tooltip = document.querySelector('.tooltip');

const toggleTooltip = (e) => {
	if (tooltip.classList.contains('active')) {
		tooltip.classList.remove('active');
	} else {
		tooltip.classList.add('active');
	}
};

button.addEventListener('click', toggleTooltip);
