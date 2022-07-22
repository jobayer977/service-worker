const CACHE_NAME = 'sw-cache-v1'
const cacheAssets = [
	'/assets/index.html',
	'/assets/main.js',
	'/assets/main.css',
]
self.addEventListener('install', (event) => {
	console.log('Service worker installing...')
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log('Opened cache')
			return cache.addAll(cacheAssets)
		})
	)
})
self.addEventListener('activate', (event) => {
	console.log('Service worker activating...')
	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cache !== CACHE_NAME) {
						return caches.delete(cache)
					}
				})
			)
		})
	)
})
self.addEventListener('fetch', (e) => {
	console.log('Service Worker Fetch')
	e.respondWith(
		fetch(e.request).catch(() => {
			return caches.match(e.request)
		})
	)
})
