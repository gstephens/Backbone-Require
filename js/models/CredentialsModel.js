// Golfer Model
// ==============

// Includes file dependencies
define([ "jquery", "backbone", "backboneLocalstorage" ], 
    function( $, Backbone, Store ) {

        console.log("CredentialsModel main");

        var CredentialsModel = Backbone.Model.extend({
            defaults: {
                username: '',
                password: '',
                loggedIn: false
            },

            localStorage: new Store('credentials'),

/*            initialize: function(){
                console.log("CredentialsModel initialize");
            },

            create: function(credentials) {
                console.log("CredentialsModel create");
                this.localStorage().setItem("Credentials", JSON.stringify(credentials));
                this.save();
                return credentials.toJSON();
            },

            find: function(credentials) {
                console.log("CredentialsModel find");
                return JSON.parse(this.localStorage().getItem("Credentials"));
            },
*/
        })
        return CredentialsModel;
    });