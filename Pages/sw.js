const cacheName = 'MarvinGuitars'

self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            cache.addAll([
                './',
                './main.html',
                './Manifest.webmanifest',
                './index.js',
                './Style/style.css',
                './Style/main.css',
                './Style/navbar.js'

            ])
        })
        )
        return self.skipWaiting()
})

self.addEventListener('activate', e=>{
    self.clients.claim()
})