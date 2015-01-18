import testHelper from '../helpers/test-breadcrumbs';

export function initialize(/* container, application */) {
  //debugger
  Ember.Handlebars.registerHelper('test-breadcrumbs', testHelper);
};

export default {
  name: 'test-breadcrumbs',
  initialize: initialize
};
