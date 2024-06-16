console.log('Hello world!');

if (module.hot) {
	module.hot.dispose(function (data) {
		data.updated = Date.now();
	});
	module.hot.accept(function (getParents) {
		let { updated } = module.hot.data;
	});
}