$(function() {
	var cats = new AngryCats([
		{name: 'Damp Ass Cat' image: 'assets/images/cat1.jp'},
		{name: 'Spolied Ass Cat' image: 'assets/images/cat2.jp'},
		{name: 'Anxeity Disorder Cat' image: 'assets/images/cat3.jp'}
	]);

	CatApp.start({cats: cats});
});