const displayAgeContainer = () => {
	const value = document.querySelector('#radio-criancas-false').checked == false
	const ageContainer = document.querySelector('#age-container')
	const ageContainerInputs = document.querySelectorAll('#age-container input')

	ageContainer.style.display = value ? 'block' : 'none'

	if (!value) {
		ageContainerInputs.forEach(e => {
			e.checked = false
		})
	}
}