// Category View
// =============

// Includes file dependencies
define([ "jquery", "backbone","models/GolferModel" ], function( $, Backbone, GolferModel ) {

    // Extends Backbone.View
    var GolferView = Backbone.View.extend( {

        // The View Constructor
        initialize: function() {
            console.log("GolferView initialize");

            // The render method is called when Category Models are added to the Collection
            //this.collection.on( "added", this.render, this );
            //this.bindTo(this.collection, 'change', this.render);
            this.collection.on("reset", this.render, this)

        },

        // Renders all of the Category models on the UI
        render: function() {
            console.log("GolferView render")

            // Sets the view's template property
            this.template = _.template( $( "script#golferItems" ).html(), { "collection": this.collection } );

            // Renders the view's template inside of the current listview element
            this.$el.find("ul").html(this.template);

            // Maintains chainability
            return this;

        }

    } );

    // Returns the View class
    return GolferView;

} );