const rocket = document.querySelector('.rocket');
const planets = document.querySelectorAll('.planet');


function showRocket() {
    rocket.classList.add('show');
}

setTimeout(showRocket, 18000);


planets.forEach(planet => {
    planet.addEventListener('click', () => {
        removeActiveClasses()
        planet.classList.add('modal')
    })
})

function removeActiveClasses() {
    planets.forEach(planet => {
        planet.classList.remove('modal')
    })
}








