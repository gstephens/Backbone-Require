// define([ "jquery", "backbone","models/GolferModel" ], function( $, Backbone, GolferModel ) {
	define(['jquery','backbone','models/CredentialsModel','collections/CredentialsCollection'],
		function( $, Backbone, CredentialsModel, CredentialsCollection ) {

			function getObjectClass(obj) {
				if (obj && obj.constructor && obj.constructor.toString) {
					var arr = obj.constructor.toString().match(
						/function\s*(\w+)/);

					if (arr && arr.length == 2) {
						return arr[1];
					}
				}

				return undefined;
			}

			//console.log("LoginView")
			var LoginView = Backbone.View.extend({
				//model: CredentialsModel,

				// Instead of generating a new element, bind to the existing skeleton of
				// the App already present in the HTML.
				el: '#login',

			    //template: _.template( loginTemplate ),

			    //console.log("LoginView events");
			    events: {
			    	'click [name="login"]':  'login',
			    	'keypress #username':    'loginOnEnter',
			    	'keypress #password':    'loginOnEnter'
			    },

			    initialize: function() {
			    	console.log("LoginView initialize");
			    	var list = CredentialsCollection.fetch();
			    	console.log(list);
			    	//var list2 = CredentialsCollection.findAll("abc");
			    	//console.log(list2);
			    },

/*			    TodosCollection.each(function( todo ) {
			    	todo.save({
			    		'completed': completed
			    	});
			    });
*/
			    login: function() {
			    	console.log("LoginView login entered")
			    	var username = this.$('#username').val().trim();
			    	var password = this.$('#password').val().trim();

			    	if ( username ){
						//var newCreds = new CredentialsModel({ username: username, password: password, id: 2 });
					//var newColl = new CredentialsCollection;
					//newColl.create({ username: username, password: password, id: 3 })
					//console.log("  Collection size: " + newColl.length);
					//var newColl = new CredentialsCollection([{ username: username, password: password }]);
					//CredentialsCollection.model = new CredentialsModel({ username: username, password: password });
					//CredentialsCollection.fetch();
					CredentialsCollection.deleteAll();

					var creds = new CredentialsModel();
					//var myCreds = new CredentialsModel({ username: username, password: password, id: 1 });
					var credDetails = { username: username, password: password, id: 1 };
					creds.save(credDetails);
					//var obj = eval(myCreds)
					//console.log("myCreds typeof: " + getObjectClass(obj));

					//var obj = eval(CredentialsCollection.model)
					//console.log("CredentialsCollection.model typeof: " + getObjectClass(obj));
					//CredentialsCollection.model.save();
					//CredentialsCollection.save([CredentialsCollection.model]);
					//var newColl = new CredentialsCollection;
					//myCreds.save();

					//var newColl = new CredentialsCollection([myCreds]);
					//this.model.save({ username: username, password: password });
				} else {
					this.clear();
				}

				//this.$el.removeClass('editing');
			},

			loginOnEnter: function( e ) {
				if ( e.keyCode === 13 ) {  // Enter key
					console.log("LoginView goto login")
					this.login();
				}
			}
		});

return LoginView;
});