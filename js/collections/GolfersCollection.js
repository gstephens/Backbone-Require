// Category Collection
// ===================

// Includes file dependencies
define([ "jquery","backbone","models/GolferModel" ], function( $, Backbone, Golfer ) {

    // Extends Backbone.Router
    var GolferCollection = Backbone.Collection.extend( {

        initialize: function( models, options ) {
            console.log("GolferCollection initialize");
            //this.type = options.type;
        },
        model: Golfer,
        dataType: "json",
        //url: 'http://tourneycard.cloudfoundry.com/rest/golfer/list.json?callback=?',
        url: function() { 
            return 'http://tourneycard.cloudfoundry.com/rest/golfer/list.json';
        //return 'http://tourneycard.cloudfoundry.com/rest/golfer/list.json?callback=?';
    },

    // override backbone sync to force a jsonp call
    sync: function(method, model, options) {
        // Default JSON-request options.
        console.log("GolferCollection sync");
        var params = _.extend({
          type:         'GET',
          dataType:     'jsonp',
          url:          model.url()+"?callback=?",
          //jsonp:        "jsonpCallback",   // the api requires the jsonp callback name to be this exact name
          processData:  false
      }, options);

        // Make the request.
        return $.ajax(params);
    },

    parse: function(response) {
        // parse can be invoked for fetch and save, in case of save it can be undefined so check before using
        console.log("GolferCollection parse") 
        console.log("  Response length:" + response.length) 
        //console.log("  Response:" + response.name) 
        //console.log("  Response:" + response.attributeName.name) 
        if (response) {
            if (response.success ) {
                                // here you write code to parse the model data returned and return it as a js object 
                                // of attributeName: attributeValue
                                console.log(" Success")
                                
                                return response
                //return {name: response.name};      // just an example,                
            }
//          options.success( categories );
//console.log("GolferCollection calling trigger")
          //self.trigger( "added" );
          console.log("GolferCollection about to return")
          return response
      }
  },
} );
return GolferCollection;
} );

/*sync: function(method, model, options){  
        options.timeout = 10000;  
    options.dataType = "jsonp";  
    return Backbone.sync(method, model, options);  
  } 
*//*        sync: function( method, model, options ) {
            var categories = [],
                self = this,
                deferred = $.Deferred();
            setTimeout( function() {
                categories = _.filter( self.jsonArray, function( row ) {
                    return row.category === self.type;
                } );
                options.success( categories );
                self.trigger( "added" );
                deferred.resolve();
            }, 1000);
            return deferred;
        }
        */
