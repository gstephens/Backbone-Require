// Category Collection
// ===================

// Includes file dependencies
define([ "jquery", "backbone", "backboneLocalstorage", "models/CredentialsModel" ], 
    function( $, Backbone, Store, Credentials ) {

        //console.log("CredentialsCollection main");

        var CredentialsCollection = Backbone.Collection.extend({
            model: Credentials,

            localStorage: new Store('credentials'),

/*            findAll: function() {
                console.log("CredentialsCollection findAll");
                console.log(this);
                var recs = _(this.records).chain()
                .map(function(id){return JSON.parse(this.localStorage().getItem(this.name+"-"+id));}, this)
                .compact()
                .value();
                console.log(recs);
                return _(this.records).chain()
                .map(function(id){return JSON.parse(this.localStorage().getItem(this.name+"-"+id));}, this)
                .compact()
                .value();
            },
*/
            deleteAll: function() {
                console.log("CredentialsCollection deleteAll");
                console.log("CredentialsCollection length: " + this.length);
/*                this.each(function(model) {
                    console.log("CredentialsCollection destroy model: " + model.id);
                });
*/
                var model;
                while (model = this.pop()) {
                    console.log("CredentialsCollection destroy model: " + model.id);
                    model.destroy();
                }
                //collection.each(function(model) { model.destroy(); } );
            }

        });

return new CredentialsCollection();
});