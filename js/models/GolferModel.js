// Golfer Model
// ==============

// Includes file dependencies
define([ "jquery", "backbone" ], function( $, Backbone ) {

    console.log("GolferModel main");
    var Golfer = Backbone.Model.extend({
        defaults: {
            name: '',
            handicapIndex: '',
            trend: ''
        },

        initialize: function(){
            console.log("GolferModel initialize")
        }

    })

    // Returns the Model class
    return Golfer;

} );