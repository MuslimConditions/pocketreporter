if ('serviceWorker' in navigator) {
	console.log('CLIENT: service worker registration in progress.');
	navigator.serviceWorker.register('http://localhost:8001/service-worker.js').then(
		function() {
			console.log('CLIENT: service worker registration complete.');
		},
		function(x) {
			console.log(x);
			console.log('CLIENT: service worker registration failure.');
		}
	);
} 
else {
  console.log('CLIENT: service worker is not supported.');
}
