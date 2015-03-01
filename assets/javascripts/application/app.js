CatApp = new Backbone.Marionette.Application();

CatApp.addRegions({
	mainRegion: "#content"
});

CatApp.addInitializer(function(options) {
	var angryCatsView = new AngryCatsView({
		collection: options.cats
	});
	CatApp.mainRegion.show(angryCatsView);
});