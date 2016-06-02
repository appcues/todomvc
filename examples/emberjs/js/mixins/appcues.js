/*global Todos, Ember */
(function () {
	'use strict';
	Todos.Appcues = Ember.Mixin.create({
		hookIntoAppcues: function(){
			Ember.run.schedule('afterRender', function(){
				Appcues.start();
			});
		}.on('init')
	});
})();
