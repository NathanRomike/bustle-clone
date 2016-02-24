import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save_story() {
      var params = {
        author: this.get('author'),
        body_text: this.get('body_text').split(/\r\n|\r|\n/g),
        category: this.get('category'),
        creation_datetime: Date.now(),
        headline_long: this.get('headline_long'),
        headline_short: this.get('headline_short'),
        image_url: this.get('image_url'),
        id: this.get('headline_short').replace(/&|\+|\s|["<>#%{}|^~\[\]`\\]/g, "-"),
      };
      this.sendAction('save_story', params);
    },
  }
});
