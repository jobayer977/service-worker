if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('../sw.js')
		.then(function (registration) {
			console.log('ServiceWorker registration successful with scope: ')
		})
		.catch(function (err) {
			console.log('ServiceWorker registration failed: ', err)
		})
}
