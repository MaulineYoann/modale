

const modal = document.getElementById('modal');
const launch = document.getElementById('launch');

launch.addEventListener('click', () => {
    modal.classList.toggle('toggle')

    if (modal.classList.contains('toggle')) {
        launch.innerText = "Afficher la modale"
    } else {
        launch.innerText = "Masquer la modale"
    }
    
})



