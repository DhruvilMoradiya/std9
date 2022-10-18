self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        './index.html',
        './app.js',
        './CSS/style.css',
        './Content/MathsIndex.html',
        './Content/SciIndex.html',
        './Content/girl-reading.svg'
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });