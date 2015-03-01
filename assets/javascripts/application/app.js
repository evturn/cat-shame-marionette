CatApp = new Backbone.Marionette.Application();

CatApp.addRegions({
	mainRegion: "#content"
});

CatApp.addInitialize(function(options) {
	var angryCatsView = new AngryCatsView({
		collection: option.cats
	});
	CatApp.mainRegion.show(angryCatsView);
});