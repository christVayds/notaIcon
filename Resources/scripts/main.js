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

    $('#addNewItem').click(function(){
        var allItems = document.querySelectorAll('.new-item');

        allItems.forEach(element => {
            if(openMenu){
                element.style.display = 'none';
            } else {
                element.style.display = 'flex';
            }
        });
        openMenu = !openMenu;
    })

    $('.viewContent').click(function(){
        var contentViewer = document.getElementById('content-viewer');

        contentViewer.style.top = '50%';
    })

    $('#exitViewer').click(function(){
        var contentViewer = document.getElementById('content-viewer');

        contentViewer.style.top = '150%';
    });
});