import Ember from 'ember';
import Ajax from 'sonatribe-ui/mixins/sonatribe-ajax';

export default Ember.Route.extend(Ajax, {
	model: function(params) {

		return this.store.find('artist', {slug: params.Slug})
				.then(function(result){
					var res = result.get('firstObject');
					console.log(result);
					console.log(res);
					return res;
				});
  	}
});
