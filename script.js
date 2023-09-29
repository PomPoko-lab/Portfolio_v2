const updateYear = () => {
	const yearElement = document.querySelector('[name="currentYear"]');

	if (yearElement === null) {
		return;
	}

	const currentYear = new Date().getFullYear();
	yearElement.textContent = currentYear.toString();
};

updateYear();
