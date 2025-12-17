self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('polylingua').then(cache => {
      return cache.addAll(['./']);
    })
  );
});
