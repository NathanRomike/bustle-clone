import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save_story(params) {
      var route = this;
      var newStory = this.store.createRecord('story', params);
      newStory.save().then(function() {
        route.transitionTo('index');
      });
    },
  }
});
