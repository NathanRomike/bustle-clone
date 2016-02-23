import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story').then(function(stories) {
      return stories.sortBy('creation_datetime').reverse();
    });
  },
});
