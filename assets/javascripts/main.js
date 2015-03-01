$(function() {
	var cats = new AngryCats([
		{name: 'Spolied Ass Cat', image: 'assets/images/cat1.jpg'},
		{name: 'Damp Ass Cat', image: 'assets/images/cat2.jpg'},
		{name: 'Anxeity Disorder Cat', image: 'assets/images/cat3.jpg'}
	]);

	CatApp.start({cats: cats});
});