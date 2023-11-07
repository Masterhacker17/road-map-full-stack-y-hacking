const selectedPart = document.querySelectorAll('.header-li');

selectedPart.forEach(selectedPart => {
    selectedPart.addEventListener('click', () => {
        removeActiveClasses()
        selectedPart.classList.add('active')
    })
})

function removeActiveClasses() {
    selectedPart.forEach(selectedPart => {
        selectedPart.classList.remove('active')
    })
}
