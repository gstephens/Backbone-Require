// Mobile Router
// =============

// Includes file dependencies
define([ "jquery","backbone", "backboneLocalstorage", "../collections/CredentialsCollection", "../models/CategoryModel", "../collections/CategoriesCollection", "../collections/GolfersCollection", "../views/CategoryView", "../views/GolferView", "../views/LoginView", "../models/CredentialsModel"  ], 
    function( $, Backbone, BackboneLocalstorage, CredentialsCollection, CategoryModel, CategoriesCollection, GolfersCollection, CategoryView, GolferView, LoginView, CredentialsModel ) {
//define([ "jquery","backbone","backboneLocalstorage", "../models/CredentialsModel", "../collections/CategoriesCollection", "../collections/GolfersCollection", "../views/CategoryView", "../views/GolferView" ], 
//    function( $, Backbone, BackboneLocalstorage, CredentialsModel, CategoriesCollection, GolfersCollection, CategoryView, GolferView ) {

    // Extends Backbone.Router
    var CategoryRouter = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {
            console.log("mobileRouter initialize");

            // Instantiates a new Animal Category View
            this.animalsView = new CategoryView( { el: "#animals", collection: new CategoriesCollection( [] , { type: "animals" } ) } );

            // Instantiates a new Colors Category View
            this.colorsView = new CategoryView( { el: "#colors", collection: new CategoriesCollection( [] , { type: "colors" } ) } );

            // Instantiates a new Vehicles Category Viewf
            this.vehiclesView = new CategoryView( { el: "#vehicles", collection: new CategoriesCollection( [] , { type: "vehicles" } ) } );

            this.golfersView = new GolferView( { el: "#golfers", collection: new GolfersCollection( [] , { type: "golfers" } ) } );

            console.log("mobileRouter inital credentials fetch");
            var myCreds = new CredentialsModel({id: 1});
            myCreds.fetch();
            //this.creds = CredentialsCollection.fetch();
            console.log(myCreds);
            //console.log(this.creds[0]);
            //console.log(this.creds.models[0]);
            console.log("--------------");
            //console.log(this.creds);
            //this.creds = CredentialsModel.fetch();
            if (!myCreds.attributes) {
                console.log("mobileRouter null Credentials, creating new");
                var myCreds = new CredentialsModel;
                this.creds = myCreds;
                console.log("mobileRouter username: " + this.creds.attributes.username);
            } else {
                console.log("mobileRouter found credentials");
                console.log("mobileRouter username: " + myCreds.attributes.username);
                console.log(myCreds.attributes);
            }
                //this.creds = new CredentialsModel;
            this.loginView = new LoginView(myCreds);

            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();
        },

        // Backbone.js Routes
        routes: {

            // When there is no hash bang on the url, the home method is called
            "": "home",

            // When #category? is on the url, the category method is called
            "category?:type": "category"

        },

        // Home method
        home: function() {

            // Programatically changes to the categories page

/*            var myCreds = new CredentialsModel();
            myCreds.find(myCreds);
            console.log("myCreds: ");
            console.log(myCreds);
*/
            //$.mobile.changePage( "#categories" , { reverse: false, changeHash: false } );
            $.mobile.changePage( "#login" , { reverse: false, changeHash: false } );

        },

        // Category method that passes in the type that is appended to the url hash
        category: function(type) {

            console.log("category type: " + type);
            // Stores the current Category View  inside of the currentView variable
            var currentView = this[ type + "View" ];

            // If there are no collections in the current Category View
            if(!currentView.collection.length) {

                // Show's the jQuery Mobile loading icon
                $.mobile.loading( "show" );

                // Fetches the Collection of Category Models for the current Category View
                currentView.collection.fetch().done( function() {

                    // Programatically changes to the current categories page
                    $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );

                } );

            }

            // If there already collections in the current Category View
            else {

                // Programatically changes to the current categories page
                $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );

            }

        }

    } );

    // Returns the Router class
    return CategoryRouter;

} );