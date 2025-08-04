self.addEventListener('install', e => {
  e.waitUntil(caches.open('rutina-cache').then(cache =>
    cache.addAll(['./', './index.html', './manifest.json', './style.css'])
  ));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
