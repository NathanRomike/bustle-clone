import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save_story(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('index');
    }
  }
});
