class UI {
    showNav() {
        document.querySelector('.nav').classList.toggle('nav_show');
    }    
}

eventListeners();
function eventListeners() {
    const ui = new UI()
    document.querySelector('.navBtn').addEventListener('click', () => {
        ui.showNav();
    })
}