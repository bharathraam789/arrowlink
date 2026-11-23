
const CACHE = 'arrow-link-static-v2';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Never cache Supabase or other external API requests
  if (url.origin !== self.location.origin) return;

  // Always try the network first for HTML pages
  if (
    request.mode === 'navigate' ||
    url.pathname.endsWith('/index.html')
  ) {
    event.respondWith(
      fetch(request)
        .then(response => response)
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Cache only the known static assets
  if (ASSETS.some(asset => new URL(asset, self.location.href).pathname === url.pathname)) {
    event.respondWith(
      caches.match(request).then(cached => {
        return cached || fetch(request);
      })
    );
  }
});
