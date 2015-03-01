AngryCatsView = Backbone.Marionette.CompositeView.extend({
	tagName: 'table',
	id: 'angry-cats',
	className: 'table-striped table-bordered',
	template: '#angry-cats-template',
	itemView: AngryCatView,
	appendHtml: function(collectionView, itemView) {
		collectionView.$('tbody').append(itemView.el);
	},
});