import Ember from 'ember';
import Ajax from 'sonatribe-ui/mixins/sonatribe-ajax';

export default Ember.Route.extend(Ajax, {
	model: function(params) {

		console.log('fetching data for ei');

		return this.store.find('eventinstance', { slug: params.Slug })
			.then(function(results){
				return results.get('firstObject');
			});

  	},
});
