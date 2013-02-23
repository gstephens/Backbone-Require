// Sets the require.js configuration for your application.
require.config( {

      // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
      paths: {

            // Core Libraries
            "jquery": "libs/jquery",
            "jquerymobile": "libs/jquerymobile",
            "underscore": "libs/lodash",
            "backbone": "libs/backbone",
            "backboneLocalstorage": "libs/backbone.localStorage"

      },

      // Sets the configuration for your third party scripts that are not AMD compatible
      shim: {

            "backbone": {
                  "deps": [ "underscore", "jquery" ],
                  "exports": "Backbone"  //attaches "Backbone" to the window object
            },
            backboneLocalstorage: {
                  deps: ['backbone'],
                  exports: 'Store'
            }

      } // end Shim Configuration

} );

// Includes File Dependencies
require([ "jquery", "backbone", "routers/mobileRouter" ], 
      function( $, Backbone, MobileRouter ) {

           $( document ).on( "mobileinit",
		// Set up the "mobileinit" handler before requiring jQuery Mobile's module
		function() {
                  console.log('mobile.js mobileinit');

                  var Golfer = Backbone.Model.extend({
                        initialize: function() {
                              console.log('Golfer.initialize');
                        },

                        defaults: {
                              name: '',
                              firstName: '',
                              lastName: '',
                              gender: '',
                              ghinNumber: '',
                              homeCourse: '',
                              email: '',
                              handicapIndex: '',
                              trend: ''
                        },
                        urlRoot: 'http://broadmoor.cloudfoundry.com/golfer/'
                  })
			// Prevents all anchor click handling including the addition of active button state and alternate link bluring.
			$.mobile.linkBindingEnabled = false;

			// Disabling this will prevent jQuery Mobile from handling hash changes
			$.mobile.hashListeningEnabled = false;
		}
           )

require( [ "jquerymobile" ], function() {
		// Instantiates a new Backbone.js Mobile Router
		this.router = new MobileRouter();
	});

/*      // PhoneGap says device is ready
      function onDeviceReady(desktop) {
            // Hide splash screen when app is loaded
            if (desktop !== true)
                  cordova.exec(null, null, 'SplashScreen', 'hide', []);
            // Push MainView
      }
      */      
} );