if("serviceWorker" in navigator){
    console.log('serviceWorker' in navigator);
    navigator.serviceWorker.register('./service_workers.js')
    .then(() => console.log('Service worker registered'))
    .catch((err) => console.log('service worker failed', err))
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", event =>{
    event.preventDefault();
    deferredPrompt = event;

    // const additionalAction = document.getElementById('additional-actions');
    // const installButton = document.createElement('button');
    // installButton.textContent = 'Install App';
    // installButton.classList = 'install';

    const installButton = document.getElementById('install');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choice => {
            if(choice.outcome === 'accepted'){
                console.log("user installed the pwa");
            }
            deferredPrompt = null;
        });
    });
});

$(document).ready(function(){
    var openMenu = false;

    $('#open-menu').click(function(){
        var menu = document.getElementById('display_menu');

        menu.style.left = '0px';
    });

    $('#exit_menu').click(function(){
        var menu = document.getElementById('display_menu');

        menu.style.left = '101%';
    });

    $('#composer-exiter').click(function(){
        var allItems = document.querySelectorAll('.new-item');
        var exiter = document.getElementById('composer-exiter');

        allItems.forEach(element => {
            if(openMenu){
                element.style.display = 'none';
                exiter.style.display = 'none';
            } else {
                element.style.display = 'flex';
                exiter.style.display = 'block';
            }
        });
        openMenu = !openMenu;
    });

    $('#addNewItem').click(function(){
        var allItems = document.querySelectorAll('.new-item');
        var exiter = document.getElementById('composer-exiter');

        allItems.forEach(element => {
            if(openMenu){
                element.style.display = 'none';
                exiter.style.display = 'none';
            } else {
                element.style.display = 'flex';
                exiter.style.display = 'block';
            }
        });
        openMenu = !openMenu;
    })

    $('.viewContent').click(function(){
        var contentViewer = document.getElementById('content-viewer');
        document.querySelector("meta[name=msapplication-navbutton-color]").setAttribute('content', '#161616');
        document.querySelector("meta[name=theme-color]").setAttribute('content', '#161616');
        contentViewer.style.top = '50%';
    })

    $('#exitViewer').click(function(){
        var contentViewer = document.getElementById('content-viewer');
        document.querySelector("meta[name=msapplication-navbutton-color]").setAttribute('content', '#e4e4e4');
        document.querySelector("meta[name=theme-color]").setAttribute('content', '#e4e4e4');
        contentViewer.style.top = '150%';
    });
});