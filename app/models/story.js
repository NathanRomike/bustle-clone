import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  body_text: DS.attr(),
  category: DS.attr(),
  creation_datetime: DS.attr(),
  headline_long: DS.attr(),
  headline_short: DS.attr(),
  image_url: DS.attr()
});
