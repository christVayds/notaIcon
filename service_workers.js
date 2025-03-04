const assets = [
    './', 
    './index.html', 
    './Resources/styles/main.css',
    './Resources/scripts/main.js'
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll(assets);
        })
    );
});

// self.addEventListener("fetch", (event) => {
//     event.respondWith(
//         caches.match(event.request).then((response) => {
//             return response || fetch(event.request);
//         })
//     );
// });

self.addEventListener("active", (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== 'v1').map(key => caches.delete(key))
            );
        })
    );
});