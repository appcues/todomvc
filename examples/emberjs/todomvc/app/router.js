import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function () {
	this.route('active');
	this.route('completed');
});

Router.reopen({
  checkForAppcues: function() {
    Ember.run.scheduleOnce('afterRender', function() {
      Appcues.start();
    });
  }.on('didTransition')
});

export default Router;
