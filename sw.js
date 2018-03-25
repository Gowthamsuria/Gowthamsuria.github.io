self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('your-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/site.js',
        '/dragon.js',
        '/styles.css',
        '/css/bootstrap.min.css',
        '/tv.jpg',
        '/phone.jpg',
        '/watch.jpg',
        '/twitter.svg',
        '/fb.svg',
        '/insta.svg',
        '/e-icon.png',
        '/js/jquery-3.2.1.slim.min.js',
        '/js/popper.min.js',
        '/js/bootstrap.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  
});