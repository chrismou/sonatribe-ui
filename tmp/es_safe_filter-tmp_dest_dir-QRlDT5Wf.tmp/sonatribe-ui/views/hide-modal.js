import Ember from 'ember';

export default Ember.View.extend({
	 // No rendering!
  render: Ember.K,

  _hideModal: function() {
    $('#discourse-modal').modal('hide');
  }.on('didInsertElement')
});
