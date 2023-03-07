const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/DevCofeePWA/",
  "/index.html",
  "/css",
  "/css/style.css",
  "/js",
  "/js/app.js",
  "/images/cafe.jpg",
  "/images/icon.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
